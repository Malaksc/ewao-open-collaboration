(function () {
  "use strict";
  var CFG = window.OC_CONFIG || { hubspot: {} };
  var T = window.OC_TEXT, CAPS = window.OC_CAPACIDADES, FICHAS = window.OC_FICHAS;
  var NIV = window.OC_NIVELES, EST = window.OC_ESTADOS;
  var lang = "es";
  try { lang = localStorage.getItem("oc_lang") || "es"; } catch (e) {}
  if (!T[lang]) lang = "es";
  var filtro = "todas";

  // ---------- analítica (GTM + dataLayer) ----------
  window.dataLayer = window.dataLayer || [];
  function track(event, params) {
    var p = params || {}; p.event = event; p.idioma = lang;
    window.dataLayer.push(p);
  }
  if (CFG.gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    var s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(CFG.gtmId);
    document.head.appendChild(s);
  }

  // ---------- origen (UTM) ----------
  var qs = new URLSearchParams(location.search);
  var origen = ["utm_source", "utm_medium", "utm_campaign"].map(function (k) { return qs.get(k) || ""; }).filter(Boolean).join(" / ");
  try {
    if (origen) sessionStorage.setItem("oc_origen", origen);
    else origen = sessionStorage.getItem("oc_origen") || (document.referrer ? "referral: " + new URL(document.referrer).hostname : "directo");
  } catch (e) { origen = origen || "directo"; }

  function t(key) { return (T[lang] && T[lang][key]) || T.es[key] || ""; }
  function L(obj) { return obj[lang] || obj.es; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---------- idioma ----------
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n")); if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    document.querySelectorAll("[data-lv]").forEach(function (el) { el.textContent = L(NIV[el.getAttribute("data-lv")]); });
    document.getElementById("lang").textContent = lang === "es" ? "EN" : "ES";
    renderChips(); renderFichas(); renderFormOptions();
  }
  document.getElementById("lang").addEventListener("click", function () {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("oc_lang", lang); } catch (e) {}
    applyLang(); track("cambio_idioma");
  });

  // ---------- filtros y fichas ----------
  function renderChips() {
    var box = document.getElementById("chips");
    var used = {};
    FICHAS.forEach(function (f) { f.capacidades.forEach(function (c) { used[c] = 1; }); });
    var html = '<button class="chip" type="button" data-cap="todas" aria-pressed="' + (filtro === "todas") + '">' + esc(t("op.todas")) + "</button>";
    Object.keys(CAPS).forEach(function (k) {
      if (used[k]) html += '<button class="chip" type="button" data-cap="' + k + '" aria-pressed="' + (filtro === k) + '">' + esc(L(CAPS[k])) + "</button>";
    });
    box.innerHTML = html;
  }
  document.getElementById("chips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    filtro = b.getAttribute("data-cap"); renderChips(); renderFichas();
    track("filtro_capacidad", { capacidad: filtro });
  });

  function tagsFor(f) {
    var n = NIV[f.nivel];
    return '<span class="tag">' + esc(L(EST[f.estado])) + "</span>" +
      '<span class="tag ' + n.tone + '">' + esc(L(n)) + "</span>" +
      '<span class="tag">' + f.semanas + " " + esc(t("f.semanas")) + "</span>" +
      (f.investigacion ? '<span class="tag inv">' + esc(t("f.inv")) + "</span>" : "") +
      '<span class="tag pilot">' + esc(t("op.piloto")) + "</span>";
  }
  function renderFichas() {
    var list = FICHAS.filter(function (f) { return filtro === "todas" || f.capacidades.indexOf(filtro) > -1; });
    document.getElementById("fichas").innerHTML = list.map(function (f) {
      return '<li class="ficha' + (f.investigacion ? " inv" : "") + '">' +
        '<img src="' + f.img + '" alt="" loading="lazy">' +
        "<div><div class=\"ficha-vert\">" + esc(L(f.vertical)) + "</div><h3>" + esc(L(f.titulo)) + "</h3>" +
        '<div class="meta">' + tagsFor(f) + "</div></div>" +
        '<button class="btn btn-line-dark" type="button" data-open="' + f.id + '">' + esc(t("op.ver")) + "</button></li>";
    }).join("");
    document.getElementById("empty").hidden = list.length > 0;
  }

  // ---------- modal de ficha ----------
  var modal = document.getElementById("modal");
  document.getElementById("fichas").addEventListener("click", function (e) {
    var b = e.target.closest("[data-open]"); if (b) openFicha(b.getAttribute("data-open"));
  });
  function openFicha(id) {
    var f = FICHAS.filter(function (x) { return x.id === id; })[0]; if (!f) return;
    var caps = f.capacidades.map(function (c) { return L(CAPS[c]); }).join(", ");
    var idi = f.idiomas.map(function (i) { return { es: "Español", en: "English", pt: "Português", wao: "Wao Tededo" }[i]; }).join(", ");
    document.getElementById("modalBody").innerHTML =
      '<img src="' + f.img + '" alt="">' +
      '<div class="modal-body"><div class="ficha-vert">' + esc(L(f.vertical)) + '</div><h3 id="mTitle">' + esc(L(f.titulo)) + "</h3>" +
      '<div class="meta">' + tagsFor(f) + "</div>" +
      '<dl class="modal-grid">' +
      '<div class="wide"><dt>' + esc(t("f.problema")) + "</dt><dd>" + esc(L(f.problema)) + "</dd></div>" +
      '<div class="wide"><dt>' + esc(t("f.entregable")) + "</dt><dd>" + esc(L(f.entregable)) + "</dd></div>" +
      "<div><dt>" + esc(t("f.capacidades")) + "</dt><dd>" + esc(caps) + "</dd></div>" +
      "<div><dt>" + esc(t("f.idiomas")) + "</dt><dd>" + esc(idi) + "</dd></div>" +
      "<div><dt>" + esc(t("f.duracion")) + "</dt><dd>" + f.semanas + " " + esc(t("f.semanas")) + ", " + f.horas + " " + esc(t("f.horas")) + "</dd></div>" +
      "<div><dt>" + esc(t("f.decide")) + "</dt><dd>" + esc(L(f.decide)) + "</dd></div></dl>" +
      (f.investigacion ? '<div class="inv-box"><strong>' + esc(t("f.inv")) + "</strong>" + esc(t("f.inv.d")) + "</div>" : "") +
      '<div class="modal-actions"><a class="btn btn-solid" href="#postular" data-apply="' + f.id + '">' + esc(t("f.postular")) + "</a>" +
      '<button class="btn btn-line-dark" type="button" data-close>' + esc(t("f.cerrar")) + "</button></div></div>";
    if (modal.showModal) modal.showModal(); else modal.setAttribute("open", "");
    var mt = document.getElementById("mTitle"); mt.setAttribute("tabindex", "-1"); mt.focus({ preventScroll: true }); modal.scrollTop = 0;
    track("ver_ficha", { ficha: f.id, vertical: f.vertical.es, investigacion: f.investigacion });
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest("[data-close]")) modal.close();
    var a = e.target.closest("[data-apply]");
    if (a) { document.getElementById("f_ficha").value = a.getAttribute("data-apply"); modal.close(); track("inicio_postulacion", { ficha: a.getAttribute("data-apply"), via: "ficha" }); }
  });

  // ---------- formulario ----------
  var form = document.getElementById("form");
  function renderFormOptions() {
    var sel = document.getElementById("f_ficha"), cur = sel.value;
    sel.innerHTML = FICHAS.map(function (f) { return '<option value="' + f.id + '">' + esc(L(f.vertical) + ": " + L(f.titulo)) + "</option>"; }).join("") +
      '<option value="red">' + esc(t("form.ficha.red")) + "</option>";
    if (cur) sel.value = cur;
    var box = document.getElementById("f_caps"), checked = {};
    box.querySelectorAll("input:checked").forEach(function (i) { checked[i.value] = 1; });
    box.innerHTML = Object.keys(CAPS).map(function (k) {
      return '<label class="ck"><input type="checkbox" name="capacidad" value="' + k + '"' + (checked[k] ? " checked" : "") + "> " + esc(L(CAPS[k])) + "</label>";
    }).join("");
  }
  document.querySelectorAll("[data-perfil]").forEach(function (a) {
    a.addEventListener("click", function () { document.getElementById("f_perfil").value = "coordinador_academico"; toggleSup(); });
  });
  document.querySelectorAll("[data-track]").forEach(function (a) {
    a.addEventListener("click", function () { track("cta_click", { cta: a.getAttribute("data-track") }); });
  });
  function toggleSup() {
    var p = document.getElementById("f_perfil").value;
    document.getElementById("supWrap").hidden = !(p === "estudiante" || p === "investigador");
  }
  document.getElementById("f_perfil").addEventListener("change", toggleSup);
  var started = false;
  form.addEventListener("focusin", function () { if (!started) { started = true; track("inicio_postulacion", { via: "formulario" }); } });

  function values(name) { return Array.prototype.map.call(form.querySelectorAll('input[name="' + name + '"]:checked'), function (i) { return i.value; }); }

  // Puntaje necesidad ↔ capacidad (0–100). Ordena la revisión humana; no decide.
  function score(d, f) {
    var s = 0;
    if (f) {
      if (f.capacidades.some(function (c) { return d.caps.indexOf(c) > -1; })) s += 35;
      var langOk = f.idiomas.filter(function (i) { return d.idiomas.indexOf(i) > -1; }).length;
      s += langOk === f.idiomas.length ? 15 : (langOk ? 7 : 0);
      s += d.horas >= f.horas ? 15 : (d.horas >= f.horas / 2 ? 7 : 0);
    } else {
      s += d.caps.length ? 35 : 0; s += d.idiomas.length ? 15 : 0; s += d.horas >= 4 ? 15 : 7;
    }
    var respaldo = d.perfil === "coordinador_academico" ? 15 :
      ((d.perfil === "estudiante" || d.perfil === "investigador") && d.sup) ? 15 :
      (d.exp >= 3 ? 15 : (d.exp >= 1 ? 8 : 0));
    s += respaldo;
    if (/^https?:\/\/\S+\.\S+/.test(d.port)) s += 10;
    s += d.mot.length >= 150 ? 10 : (d.mot.length >= 60 ? 5 : 0);
    return Math.min(100, s);
  }
  // Sin la capacidad que pide la ficha no se puede quedar Calificado: como máximo, Revisar.
  function tieneCapacidad(d, f) { return f ? f.capacidades.some(function (c) { return d.caps.indexOf(c) > -1; }) : d.caps.length > 0; }
  function nivel(s, cap) { return (s >= 60 && cap) ? "Calificado" : (s >= 40 ? "Revisar" : "No calificado"); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var err = document.getElementById("formErr"); err.hidden = true;
    form.querySelectorAll(".invalid").forEach(function (el) { el.classList.remove("invalid"); });
    var bad = [];
    ["f_nombre", "f_apellido", "f_email", "f_pais", "f_horas", "f_mot"].forEach(function (id) { var el = document.getElementById(id); if (!el.checkValidity() || !el.value.trim()) bad.push(el); });
    ["f_cond", "f_cons1"].forEach(function (id) { var el = document.getElementById(id); if (!el.checked) bad.push(el.closest("label")); });
    var caps = values("capacidad"), idiomas = values("idioma");
    if (!caps.length) bad.push(document.getElementById("f_caps").closest("fieldset"));
    if (!idiomas.length) bad.push(form.querySelector('input[name="idioma"]').closest("fieldset"));
    if (bad.length) { bad.forEach(function (el) { el.classList.add("invalid"); }); err.textContent = t("form.err.req"); err.hidden = false; (bad[0].querySelector ? (bad[0].querySelector("input,textarea,select") || bad[0]) : bad[0]).focus(); return; }

    var fichaId = document.getElementById("f_ficha").value;
    var f = FICHAS.filter(function (x) { return x.id === fichaId; })[0];
    var d = {
      perfil: document.getElementById("f_perfil").value, caps: caps, idiomas: idiomas,
      horas: parseInt(document.getElementById("f_horas").value, 10) || 0,
      exp: parseInt(document.getElementById("f_exp").value, 10) || 0,
      sup: document.getElementById("f_sup").checked,
      port: document.getElementById("f_port").value.trim(), mot: document.getElementById("f_mot").value.trim()
    };
    var sc = score(d, f), nv = nivel(sc, tieneCapacidad(d, f));
    var fields = {
      firstname: document.getElementById("f_nombre").value.trim(), lastname: document.getElementById("f_apellido").value.trim(),
      email: document.getElementById("f_email").value.trim(), country: document.getElementById("f_pais").value.trim(),
      company: document.getElementById("f_org").value.trim(),
      oc_ficha: fichaId, oc_vertical: f ? f.vertical.es : "Red Open Collaboration",
      oc_nivel_informacion: f ? f.nivel : "publica", oc_bandera_investigacion: f && f.investigacion ? "true" : "false",
      oc_perfil: d.perfil, oc_capacidades: caps.join(";"), oc_idiomas: idiomas.join(";"),
      oc_horas_semana: String(d.horas), oc_experiencia_anios: String(d.exp), oc_supervision_academica: d.sup ? "true" : "false",
      oc_portafolio: d.port, oc_motivacion: d.mot, oc_score: String(sc), oc_score_nivel: nv,
      oc_acepta_condiciones: "true", oc_consentimiento_gestion: "true",
      oc_consentimiento_comunicaciones: document.getElementById("f_cons2").checked ? "true" : "false",
      oc_origen: origen, oc_idioma_formulario: lang
    };
    var btn = document.getElementById("submitBtn"); btn.disabled = true; btn.textContent = t("form.enviando");
    sendHubSpot(CFG.hubspot.formPostulacion, fields, "Open Collaboration · Postulación").then(function () {
      track("form_submit", { formulario: "postulacion", ficha: fichaId, score: sc, score_nivel: nv, perfil: d.perfil, investigacion: !!(f && f.investigacion) });
      form.hidden = true;
      var ok = document.getElementById("ok"); ok.hidden = false;
      document.getElementById("okInv").hidden = !(f && f.investigacion);
      ok.focus();
    }).catch(function () {
      err.textContent = t("form.err.net"); err.hidden = false;
    }).then(function () { btn.disabled = false; btn.textContent = t("form.enviar"); });
  });
  document.getElementById("otra").addEventListener("click", function () {
    form.reset(); form.hidden = false; document.getElementById("ok").hidden = true; toggleSup();
    document.getElementById("oportunidades").scrollIntoView();
  });

  function hutk() { var m = document.cookie.match(/(?:^|; )hubspotutk=([^;]+)/); return m ? m[1] : undefined; }
  function sendHubSpot(formGuid, fields, pageName) {
    var portal = CFG.hubspot && CFG.hubspot.portalId;
    if (!portal || !formGuid) {
      console.info("[Open Collaboration] HubSpot sin configurar: datos que se enviarían", fields);
      return Promise.resolve();
    }
    var body = {
      fields: Object.keys(fields).filter(function (k) { return fields[k] !== ""; }).map(function (k) { return { objectTypeId: "0-1", name: k, value: fields[k] }; }),
      context: { pageUri: location.href, pageName: pageName, hutk: hutk() }
    };
    return fetch("https://api.hsforms.com/submissions/v3/integration/submit/" + encodeURIComponent(portal) + "/" + encodeURIComponent(formGuid), {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    }).then(function (r) { if (!r.ok) return r.text().then(function (x) { console.warn("HubSpot", r.status, x); throw new Error("hs"); }); });
  }
  window.OC_sendHubSpot = sendHubSpot;

  // ---------- río: se dibuja una vez al entrar en pantalla ----------
  var river = document.getElementById("river"), path = document.getElementById("riverPath");
  if (river && path && "IntersectionObserver" in window && path.getTotalLength) {
    river.style.setProperty("--len", Math.ceil(path.getTotalLength())); river.classList.add("pre");
    var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { river.classList.add("draw"); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(river);
  }

  track("vista_landing", { origen: origen });
  applyLang(); toggleSup();
})();
