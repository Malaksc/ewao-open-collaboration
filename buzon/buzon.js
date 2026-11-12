(function () {
  "use strict";
  var CFG = window.OC_CONFIG || { hubspot: {} };
  var qs = new URLSearchParams(location.search);
  var raw = (qs.get("c") || "demo").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40) || "demo";
  var nombreComunidad = raw === "demo" ? "Comunidad de prueba" : raw.replace(/-/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); });
  document.getElementById("comunidad").textContent = nombreComunidad;

  window.dataLayer = window.dataLayer || [];
  function track(ev, p) { p = p || {}; p.event = ev; p.comunidad = raw; window.dataLayer.push(p); }
  if (CFG.gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    var s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(CFG.gtmId); document.head.appendChild(s);
  }
  track("buzon_abierto", { via: qs.get("utm_source") || "qr" });

  var form = document.getElementById("bz");
  function val(name) { var el = form.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ""; }

  var voice = document.getElementById("voice");
  function updateVoice() {
    if (!CFG.whatsappBuzon) return;
    var txt = "Buzón Keweriono · " + nombreComunidad + (val("tipo") ? " · " + val("tipo") : "") + (val("tema") ? " · " + val("tema") : "") + ". Mi nota de voz:";
    voice.href = "https://wa.me/" + CFG.whatsappBuzon.replace(/\D/g, "") + "?text=" + encodeURIComponent(txt);
    voice.hidden = false;
  }
  form.addEventListener("change", updateVoice); updateVoice();
  voice.addEventListener("click", function () { track("buzon_nota_voz", { tipo: val("tipo"), tema: val("tema") }); });

  var anon = document.getElementById("anon"), nameWrap = document.getElementById("nameWrap");
  anon.addEventListener("change", function () { nameWrap.hidden = anon.checked; });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var err = document.getElementById("err");
    if (!val("tipo") || !val("tema")) { err.hidden = false; err.focus && err.scrollIntoView({ block: "center" }); return; }
    err.hidden = true;
    var fields = {
      email: "buzon-" + raw + "@example.org",
      firstname: "Buzón", lastname: nombreComunidad,
      oc_buzon_comunidad: nombreComunidad, oc_buzon_tipo: val("tipo"), oc_buzon_tema: val("tema"),
      oc_buzon_mensaje: document.getElementById("msg").value.trim(),
      oc_buzon_anonimo: anon.checked ? "true" : "false",
      oc_buzon_nombre: anon.checked ? "" : document.getElementById("nombre").value.trim()
    };
    var btn = document.getElementById("send"); btn.disabled = true; btn.textContent = "Enviando…";
    send(fields).then(function () {
      track("buzon_enviado", { tipo: fields.oc_buzon_tipo, tema: fields.oc_buzon_tema, anonimo: anon.checked });
      form.hidden = true; var d = document.getElementById("done"); d.hidden = false; d.focus();
    }).catch(function () {
      err.textContent = "No se pudo enviar. Revisa la conexión del punto comunitario y vuelve a intentarlo."; err.hidden = false;
    }).then(function () { btn.disabled = false; btn.textContent = "Enviar al buzón"; });
  });
  document.getElementById("again").addEventListener("click", function () {
    form.reset(); nameWrap.hidden = true; form.hidden = false; document.getElementById("done").hidden = true; updateVoice();
  });

  function send(fields) {
    var portal = CFG.hubspot && CFG.hubspot.portalId, guid = CFG.hubspot && CFG.hubspot.formBuzon;
    if (!portal || !guid) { console.info("[Buzón] HubSpot sin configurar: datos que se enviarían", fields); return Promise.resolve(); }
    var body = { fields: Object.keys(fields).filter(function (k) { return fields[k] !== ""; }).map(function (k) { return { objectTypeId: "0-1", name: k, value: fields[k] }; }),
      context: { pageUri: location.href, pageName: "Buzón comunitario Keweriono" } };
    return fetch("https://api.hsforms.com/submissions/v3/integration/submit/" + encodeURIComponent(portal) + "/" + encodeURIComponent(guid), {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    }).then(function (r) { if (!r.ok) throw new Error("hs " + r.status); });
  }
})();
