// Capacidades, oportunidades piloto y textos ES/EN de EWAO Open Collaboration.

window.OC_CAPACIDADES = {
  ecommerce:   { es: "Ecommerce y retail",            en: "Ecommerce and retail" },
  mercado:     { es: "Investigación de mercado",      en: "Market research" },
  turismo:     { es: "Turismo",                       en: "Tourism" },
  crm:         { es: "CRM y automatización",          en: "CRM and automation" },
  traduccion:  { es: "Traducción",                    en: "Translation" },
  video:       { es: "Video y contenidos",            en: "Video and content" },
  biologia:    { es: "Biología y ciencias ambientales", en: "Biology and environmental science" },
  datos:       { es: "Datos y GIS",                   en: "Data and GIS" },
  archivo:     { es: "Archivística y gestión documental", en: "Archiving and records management" },
  diseno:      { es: "Diseño",                        en: "Design" }
};

window.OC_NIVELES = {
  publica:     { es: "Pública", en: "Public", tone: "open" },
  interna:     { es: "Interna", en: "Internal", tone: "mid" },
  confidencial:{ es: "Confidencial", en: "Confidential", tone: "closed" },
  protegida:   { es: "Cultural / territorial protegida", en: "Cultural / territorial protected", tone: "closed" },
  especifico:  { es: "Acceso específico", en: "Specific access", tone: "mid" }
};

window.OC_ESTADOS = {
  funcionando: { es: "Funcionando", en: "Operating" },
  desarrollo:  { es: "En desarrollo", en: "In development" },
  proyectado:  { es: "Proyectado", en: "Planned" }
};

// Fichas piloto: necesidades de ejemplo en las áreas que EWAO priorizó para empezar
// (WEMA, Turismo, Voluntariado, Comunicación, Investigación y Gobernanza).
window.OC_FICHAS = [
  {
    id: "wema-catalogo", img: "assets/img/wema.jpg",
    vertical: { es: "WEMA · Artesanía de mujeres Waorani", en: "WEMA · Waorani women's crafts" },
    titulo: { es: "Catálogo internacional y canal de venta online", en: "International catalogue and online sales channel" },
    problema: {
      es: "WEMA ya tiene identidad, logotipo, Instagram, fotografía y un catálogo inicial. Falta convertir ese material en un catálogo bilingüe y elegir el canal para vender fuera de Ecuador.",
      en: "WEMA already has an identity, logo, Instagram, photography and an initial catalogue. It now needs a bilingual catalogue and a channel to sell outside Ecuador."
    },
    entregable: {
      es: "Catálogo ES/EN en archivo editable y recomendación de canal (marketplace, tienda propia o tiendas especializadas) con costos comparados.",
      en: "Editable ES/EN catalogue and a channel recommendation (marketplace, own store or specialist shops) with compared costs."
    },
    capacidades: ["ecommerce", "diseno", "mercado"], idiomas: ["es", "en"],
    semanas: 8, horas: 6, estado: "desarrollo", nivel: "publica", investigacion: false,
    decide: { es: "EWAO, dentro del mandato vigente", en: "EWAO, within the current mandate" }
  },
  {
    id: "turismo-operadores", img: "assets/img/rio-canoa.jpg",
    vertical: { es: "WAO Ecoturismo", en: "WAO Ecotourism" },
    titulo: { es: "Mapa de operadores de turismo regenerativo", en: "Map of regenerative tourism operators" },
    problema: {
      es: "WAO Ecoturismo está diseñando las Expediciones WAO y busca alianzas con operadores especializados. Hay que saber cuáles trabajan con turismo liderado por comunidades.",
      en: "WAO Ecotourism is designing the WAO Expeditions and seeks partnerships with specialist operators. It needs to know which ones work with community-led tourism."
    },
    entregable: {
      es: "Base de operadores calificados con criterios de selección, datos de contacto y una ficha de cada uno.",
      en: "Database of qualified operators with selection criteria, contact details and a profile for each."
    },
    capacidades: ["mercado", "turismo"], idiomas: ["es", "en"],
    semanas: 6, horas: 5, estado: "desarrollo", nivel: "publica", investigacion: false,
    decide: { es: "EWAO, dentro del mandato vigente", en: "EWAO, within the current mandate" }
  },
  {
    id: "voluntariado-onboarding", img: "assets/img/equipo.jpg",
    vertical: { es: "Programa de Voluntariado Profesional", en: "Professional Volunteering Programme" },
    titulo: { es: "Secuencia automatizada de bienvenida para voluntarios", en: "Automated onboarding sequence for volunteers" },
    problema: {
      es: "El programa de voluntariado ya funciona, pero cada persona aceptada recibe la información y los documentos de forma manual.",
      en: "The volunteering programme is already running, but every accepted volunteer receives information and documents manually."
    },
    entregable: {
      es: "Secuencia de correos ES/EN lista para usar y un manual para que el equipo de EWAO la mantenga.",
      en: "Ready-to-use ES/EN email sequence and a manual so the EWAO team can maintain it."
    },
    capacidades: ["crm"], idiomas: ["es", "en"],
    semanas: 4, horas: 5, estado: "funcionando", nivel: "publica", investigacion: false,
    decide: { es: "EWAO, en coordinación con el equipo de Voluntariado", en: "EWAO, together with the Volunteering team" }
  },
  {
    id: "comunicacion-subtitulos", img: "assets/img/encuentro.jpg",
    vertical: { es: "Comunicación de Keweriono", en: "Keweriono communications" },
    titulo: { es: "Subtitulado ES/EN de videos institucionales", en: "ES/EN subtitles for institutional videos" },
    problema: {
      es: "Los videos de Keweriono y EWAO necesitan llegar a públicos de habla inglesa sin perder lo que dicen sus protagonistas.",
      en: "Keweriono and EWAO videos need to reach English-speaking audiences without losing what their speakers say."
    },
    entregable: {
      es: "Archivos de subtítulos ES/EN por video y versiones editables. El material se comparte solo con la persona asignada.",
      en: "ES/EN subtitle files per video and editable versions. The material is shared only with the assigned person."
    },
    capacidades: ["traduccion", "video"], idiomas: ["es", "en"],
    semanas: 4, horas: 4, estado: "funcionando", nivel: "especifico", investigacion: false,
    decide: { es: "EWAO, por la delegación de comunicación acordada", en: "EWAO, under the agreed communications mandate" }
  },
  {
    id: "biodiversidad-camaras", img: "assets/img/bosque.jpg",
    vertical: { es: "WAO Biodiversidad", en: "WAO Biodiversity" },
    titulo: { es: "Protocolo para analizar imágenes de cámaras trampa", en: "Protocol to analyse camera-trap images" },
    problema: {
      es: "Las primeras cámaras trampa ya se están instalando. Se necesita un protocolo para clasificar registros de fauna que los monitores Waorani puedan usar.",
      en: "The first camera traps are being installed. A protocol is needed to classify wildlife records that Waorani monitors can use."
    },
    entregable: {
      es: "Protocolo de clasificación, plantilla de registro y una sesión de capacitación para los monitores. Sin coordenadas públicas.",
      en: "Classification protocol, recording template and a training session for the monitors. No public coordinates."
    },
    capacidades: ["biologia", "datos"], idiomas: ["es"],
    semanas: 12, horas: 6, estado: "desarrollo", nivel: "protegida", investigacion: true,
    decide: { es: "Dirigencia, con consentimiento previo, libre e informado", en: "Leadership, with free, prior and informed consent" }
  },
  {
    id: "gobernanza-archivo", img: "assets/img/solar.jpg",
    vertical: { es: "WAO Gobernanza", en: "WAO Governance" },
    titulo: { es: "Estructura y permisos del archivo vivo de Keweriono", en: "Structure and permissions for Keweriono's living archive" },
    problema: {
      es: "La documentación de la Asociación está repartida en distintos formatos. El archivo vivo necesita una estructura para guardar decisiones, acuerdos y resultados con su nivel de acceso.",
      en: "The Association's records are spread across formats. The living archive needs a structure to store decisions, agreements and results with their access level."
    },
    entregable: {
      es: "Esquema de clasificación, cinco niveles de acceso aplicados y una guía de carga para el equipo técnico.",
      en: "Classification scheme, the five access levels applied and an upload guide for the technical team."
    },
    capacidades: ["archivo", "datos"], idiomas: ["es"],
    semanas: 10, horas: 5, estado: "desarrollo", nivel: "confidencial", investigacion: false,
    decide: { es: "Dirigencia valida; EWAO prepara opciones", en: "Leadership approves; EWAO prepares options" }
  }
];

window.OC_TEXT = {
  es: {
    "nav.como": "Cómo funciona", "nav.oportunidades": "Oportunidades", "nav.condiciones": "Condiciones", "nav.postular": "Postular",
    "hero.proto": "Prototipo académico, no oficial",
    "hero.title": "Necesidades del territorio, capacidades del mundo",
    "hero.lead": "La Asociación Keweriono decide qué necesita. EWAO lo convierte en una tarea clara. Tú aportas tu capacidad a distancia, y el resultado vuelve al territorio.",
    "hero.cta1": "Ver oportunidades", "hero.cta2": "Traer un curso universitario",
    "hero.fact": "9 de las 16 comunidades del Modelo EWAO ya están conectadas con Starlink y energía solar.",
    "gob.title": "Antes de que exista una oportunidad, alguien del territorio la decidió",
    "gob.lead": "Ninguna necesidad se publica sin pasar por el nivel de decisión que le corresponde.",
    "gob.asamblea.t": "Asamblea de Keweriono", "gob.asamblea.d": "Máxima autoridad. Define los grandes mandatos.",
    "gob.dirigencia.t": "Dirigencia", "gob.dirigencia.d": "Prioriza, decide lo operativo y define qué vuelve a Asamblea.",
    "gob.ewao.t": "Equipo técnico EWAO", "gob.ewao.d": "Estructura la necesidad, conecta capacidades y ejecuta dentro del mandato.",
    "gob.buzon": "Cualquier persona de las comunidades puede proponer una necesidad, incluso de forma anónima, desde el buzón del punto de conexión de su comunidad.",
    "ciclo.title": "Ninguna colaboración se cierra hasta que el resultado vuelve al territorio",
    "ciclo.s1": "Necesidad", "ciclo.d1": "Llega por el buzón o la dirigencia",
    "ciclo.s2": "Decisión", "ciclo.d2": "Se valida en su nivel y se clasifica",
    "ciclo.s3": "Ficha", "ciclo.d3": "EWAO define problema, alcance y entregable",
    "ciclo.s4": "Matching", "ciclo.d4": "Puntaje automático y revisión humana",
    "ciclo.s5": "Colaboración", "ciclo.d5": "Remota, con el acceso que corresponde",
    "ciclo.s6": "Entrega", "ciclo.d6": "Archivos editables y documentos fuente",
    "ciclo.s7": "Devolución", "ciclo.d7": "Checklist completo y necesidad resuelta",
    "ciclo.s8": "Archivo vivo", "ciclo.d8": "Queda guardado y crece la capacidad local",
    "op.title": "Oportunidades abiertas",
    "op.lead": "Fichas piloto en las áreas que EWAO priorizó para empezar. Cada una muestra de qué iniciativa viene, su estado real y quién autorizó publicarla.",
    "op.filtro": "Filtrar por capacidad", "op.todas": "Todas", "op.ver": "Ver ficha", "op.vacio": "No hay fichas con esa capacidad. Prueba con otra o postula igual para quedar en la red.",
    "op.piloto": "Ficha piloto",
    "f.problema": "Problema", "f.entregable": "Entregable", "f.capacidades": "Capacidades", "f.idiomas": "Idiomas",
    "f.duracion": "Duración", "f.semanas": "semanas", "f.horas": "h por semana", "f.estado": "Estado de la iniciativa",
    "f.nivel": "Nivel de información", "f.decide": "Autoriza publicar", "f.inv": "Ruta especial de investigación",
    "f.inv.d": "Esta ficha toca conocimiento, biodiversidad o territorio. Antes de asignarla se verifican el consentimiento previo, libre e informado, la confidencialidad y los acuerdos de acceso, uso y beneficios. La publicación de resultados requiere autorización de la dirigencia, y al cerrar, los datos vuelven al archivo vivo.",
    "f.postular": "Postular a esta ficha", "f.cerrar": "Cerrar",
    "perfil.title": "Para quién es",
    "perfil.uni.t": "Universidades y docentes", "perfil.uni.d": "Trae un curso o un grupo de tesistas a un caso real con alcance semestral, entregable evaluable y un marco ético claro. Partimos por aquí porque la supervisión académica da estructura y trazabilidad.",
    "perfil.pro.t": "Profesionales y exvoluntarios", "perfil.pro.d": "Aplica tu experiencia a una necesidad concreta, con problema, plazo y entregable definidos, sin viajar. Si estuviste en el territorio, sigue colaborando desde tu país.",
    "perfil.recibes": "Lo que recibes", "perfil.r1": "Un caso real definido por la comunidad", "perfil.r2": "Certificado de contribución verificable", "perfil.r3": "Saber qué pasó con tu trabajo", "perfil.r4": "Nuevas oportunidades según tu perfil",
    "cond.title": "Condiciones para colaborar",
    "cond.lead": "Se aceptan antes de empezar y cambian según el nivel de información de cada ficha.",
    "cond.niveles": "Cinco niveles de información",
    "cond.n.publica": "Puede ir en la ficha.", "cond.n.interna": "Solo un resumen aprobado.", "cond.n.confidencial": "Solo para la persona asignada, con acuerdo de confidencialidad.",
    "cond.n.protegida": "Nunca sin consentimiento previo, libre e informado.", "cond.n.especifico": "Solo para quien aceptó las condiciones de ese nivel.",
    "cond.c1.t": "El resultado es de Keweriono", "cond.c1.d": "Todo entregable se transfiere con archivos editables y licencia de uso perpetua y gratuita.",
    "cond.c2.t": "Beneficio comunitario", "cond.c2.d": "Si un resultado deriva del saber o los recursos del territorio, se firman acuerdos previos de propiedad intelectual y reparto justo de beneficios. EWAO evalúa jurídicamente una copropiedad con un mínimo de 50% para la comunidad.",
    "cond.c3.t": "Sin contacto con pueblos en aislamiento", "cond.c3.d": "No se publican coordenadas ni rutas, y ninguna ficha exige entrar a zonas de movilidad de los Tagaeri y Taromenane.",
    "cond.c4.t": "Solo lo demostrable", "cond.c4.d": "Cada ficha muestra el estado real de su iniciativa. Nadie promete impactos que no se puedan verificar.",
    "dev.title": "Qué pasa con tu trabajo",
    "dev.lead": "Una colaboración se cierra solo cuando el resultado vuelve en un formato que la comunidad puede usar.",
    "dev.c1": "Archivos editables y documentos fuente", "dev.c2": "Manual o instrucciones de uso", "dev.c3": "Licencia de uso a favor de Keweriono",
    "dev.c4": "Capacitación a quien lo usará", "dev.c5": "Registro en el archivo vivo", "dev.c6": "Validación de que la necesidad quedó resuelta",
    "dev.after": "Después te contamos cómo se usó tu trabajo y te avisamos de nuevas fichas compatibles con tu perfil.",
    "form.title": "Postula a una oportunidad",
    "form.lead": "Toma unos 4 minutos. Un responsable de EWAO revisa cada postulación; el puntaje solo ordena la revisión.",
    "form.ficha": "Ficha a la que postulas", "form.ficha.red": "Ninguna en particular: quiero entrar a la red",
    "form.perfil": "Tu perfil", "form.perfil.coord": "Coordino un curso o programa universitario", "form.perfil.est": "Estudiante avanzado/a o tesista",
    "form.perfil.pro": "Profesional especialista", "form.perfil.exvol": "Exvoluntario/a de EWAO", "form.perfil.inv": "Investigador/a",
    "form.nombre": "Nombre", "form.apellido": "Apellido", "form.email": "Correo", "form.pais": "País", "form.org": "Universidad u organización",
    "form.capacidades": "Tus capacidades", "form.idiomas": "Idiomas en que puedes trabajar", "form.horas": "Horas por semana disponibles",
    "form.exp": "Años de experiencia en tu área", "form.supervision": "Cuento con supervisión académica (docente o guía de tesis)",
    "form.portafolio": "Link a trabajos previos (portafolio, LinkedIn o publicación)", "form.motivacion": "¿Por qué esta colaboración y qué aportarías?",
    "form.motivacion.ph": "Cuéntanos en pocas líneas qué harías y con qué experiencia.",
    "form.cond": "Acepto las condiciones para colaborar: confidencialidad según el nivel de acceso, uso de imágenes solo con autorización, protección cultural, entrega del resultado a Keweriono con licencia de uso y, en investigación con saberes o recursos del territorio, acuerdos de propiedad intelectual y reparto justo de beneficios.",
    "form.cons1": "Autorizo a EWAO a usar mis datos para gestionar esta postulación.",
    "form.cons2": "Quiero recibir nuevas oportunidades y noticias de EWAO. Puedo darme de baja cuando quiera.",
    "form.enviar": "Enviar postulación", "form.enviando": "Enviando…",
    "form.err.req": "Completa los campos marcados para enviar la postulación.",
    "form.err.net": "No se pudo enviar. Revisa tu conexión y vuelve a intentarlo.",
    "form.ok.t": "Postulación enviada",
    "form.ok.d": "Te llegará un correo de confirmación. Un responsable de EWAO revisará tu perfil contra la ficha y te escribirá con los siguientes pasos.",
    "form.ok.inv": "Como esta ficha sigue la ruta especial de investigación, antes de empezar te enviaremos los acuerdos de consentimiento, confidencialidad y beneficio comunitario.",
    "form.otra": "Postular a otra ficha",
    "foot.lema": "Keweriono define el rumbo. EWAO convierte ese rumbo en capacidad de ejecución.",
    "foot.buzon": "Buzón comunitario", "foot.sitio": "Sitio de EWAO", "foot.fotos": "Fotografías: EWAO Project (ewaoproject.com). Las fichas de esta página son ejemplos piloto.",
    "foot.grupo": "Prototipo académico, no oficial, desarrollado por el Grupo 6, Estrategia de Internacionalización y Marketing Global, Universidad del Desarrollo, para EWAO y la Asociación Keweriono."
  },
  en: {
    "nav.como": "How it works", "nav.oportunidades": "Opportunities", "nav.condiciones": "Terms", "nav.postular": "Apply",
    "hero.proto": "Academic prototype, not official",
    "hero.title": "Needs from the territory, skills from the world",
    "hero.lead": "The Keweriono Association decides what it needs. EWAO turns it into a clear task. You contribute your skills remotely, and the result goes back to the territory.",
    "hero.cta1": "See opportunities", "hero.cta2": "Bring a university course",
    "hero.fact": "9 of the 16 communities in the EWAO Model are already connected with Starlink and solar power.",
    "gob.title": "Before an opportunity exists, someone in the territory decided it",
    "gob.lead": "No need is published without going through the decision level it belongs to.",
    "gob.asamblea.t": "Keweriono Assembly", "gob.asamblea.d": "Highest authority. Sets the major mandates.",
    "gob.dirigencia.t": "Leadership", "gob.dirigencia.d": "Prioritises, makes operational decisions and decides what returns to the Assembly.",
    "gob.ewao.t": "EWAO technical team", "gob.ewao.d": "Structures the need, connects skills and executes within the mandate.",
    "gob.buzon": "Anyone in the communities can propose a need, even anonymously, from the mailbox at their community's connection point.",
    "ciclo.title": "No collaboration closes until the result returns to the territory",
    "ciclo.s1": "Need", "ciclo.d1": "Comes from the mailbox or the leadership",
    "ciclo.s2": "Decision", "ciclo.d2": "Approved at its level and classified",
    "ciclo.s3": "Brief", "ciclo.d3": "EWAO defines problem, scope and deliverable",
    "ciclo.s4": "Matching", "ciclo.d4": "Automatic score and human review",
    "ciclo.s5": "Collaboration", "ciclo.d5": "Remote, with the right access level",
    "ciclo.s6": "Delivery", "ciclo.d6": "Editable files and source documents",
    "ciclo.s7": "Return", "ciclo.d7": "Checklist complete and need solved",
    "ciclo.s8": "Living archive", "ciclo.d8": "Stored, and local capacity grows",
    "op.title": "Open opportunities",
    "op.lead": "Pilot briefs in the areas EWAO prioritised to begin with. Each shows the initiative it comes from, its real status and who approved publishing it.",
    "op.filtro": "Filter by skill", "op.todas": "All", "op.ver": "View brief", "op.vacio": "No briefs match that skill. Try another one, or apply anyway to join the network.",
    "op.piloto": "Pilot brief",
    "f.problema": "Problem", "f.entregable": "Deliverable", "f.capacidades": "Skills", "f.idiomas": "Languages",
    "f.duracion": "Duration", "f.semanas": "weeks", "f.horas": "h per week", "f.estado": "Initiative status",
    "f.nivel": "Information level", "f.decide": "Approved by", "f.inv": "Special research route",
    "f.inv.d": "This brief involves knowledge, biodiversity or territory. Before it is assigned, free, prior and informed consent, confidentiality and agreements on access, use and benefits are verified. Publishing results requires the leadership's approval, and at closing, the data return to the living archive.",
    "f.postular": "Apply to this brief", "f.cerrar": "Close",
    "perfil.title": "Who it is for",
    "perfil.uni.t": "Universities and faculty", "perfil.uni.d": "Bring a course or a group of thesis students to a real case with a one-semester scope, a gradable deliverable and a clear ethical framework. We start here because academic supervision gives structure and traceability.",
    "perfil.pro.t": "Professionals and former volunteers", "perfil.pro.d": "Apply your expertise to a concrete need with a defined problem, timeline and deliverable, without travelling. If you have been to the territory, keep collaborating from home.",
    "perfil.recibes": "What you get", "perfil.r1": "A real case defined by the community", "perfil.r2": "A verifiable contribution certificate", "perfil.r3": "To know what happened with your work", "perfil.r4": "New opportunities matched to your profile",
    "cond.title": "Terms for collaborating",
    "cond.lead": "Accepted before you start, and adjusted to each brief's information level.",
    "cond.niveles": "Five information levels",
    "cond.n.publica": "Can appear in the brief.", "cond.n.interna": "Only an approved summary.", "cond.n.confidencial": "Only for the assigned person, under a confidentiality agreement.",
    "cond.n.protegida": "Never without free, prior and informed consent.", "cond.n.especifico": "Only for whoever accepted that level's terms.",
    "cond.c1.t": "The result belongs to Keweriono", "cond.c1.d": "Every deliverable is handed over with editable files and a perpetual, free licence of use.",
    "cond.c2.t": "Community benefit", "cond.c2.d": "If a result derives from the territory's knowledge or resources, prior agreements on intellectual property and fair benefit-sharing are signed. EWAO is assessing, from a legal standpoint, co-ownership with at least 50% for the community.",
    "cond.c3.t": "No contact with peoples in isolation", "cond.c3.d": "No coordinates or routes are published, and no brief requires entering the mobility areas of the Tagaeri and Taromenane.",
    "cond.c4.t": "Only what can be shown", "cond.c4.d": "Each brief shows the real status of its initiative. No one promises impacts that cannot be verified.",
    "dev.title": "What happens with your work",
    "dev.lead": "A collaboration only closes when the result comes back in a format the community can use.",
    "dev.c1": "Editable files and source documents", "dev.c2": "Manual or user instructions", "dev.c3": "Licence of use for Keweriono",
    "dev.c4": "Training for whoever will use it", "dev.c5": "Entry in the living archive", "dev.c6": "Confirmation that the need was solved",
    "dev.after": "Afterwards we tell you how your work was used and let you know about new briefs that fit your profile.",
    "form.title": "Apply to an opportunity",
    "form.lead": "It takes about 4 minutes. An EWAO lead reviews every application; the score only orders the review.",
    "form.ficha": "Brief you are applying to", "form.ficha.red": "None in particular: I want to join the network",
    "form.perfil": "Your profile", "form.perfil.coord": "I coordinate a university course or programme", "form.perfil.est": "Advanced student or thesis student",
    "form.perfil.pro": "Specialist professional", "form.perfil.exvol": "Former EWAO volunteer", "form.perfil.inv": "Researcher",
    "form.nombre": "First name", "form.apellido": "Last name", "form.email": "Email", "form.pais": "Country", "form.org": "University or organisation",
    "form.capacidades": "Your skills", "form.idiomas": "Languages you can work in", "form.horas": "Hours available per week",
    "form.exp": "Years of experience in your field", "form.supervision": "I have academic supervision (faculty member or thesis advisor)",
    "form.portafolio": "Link to previous work (portfolio, LinkedIn or publication)", "form.motivacion": "Why this collaboration, and what would you contribute?",
    "form.motivacion.ph": "Tell us in a few lines what you would do and with what experience.",
    "form.cond": "I accept the terms for collaborating: confidentiality according to the access level, use of images only with permission, cultural protection, handing the result to Keweriono with a licence of use and, in research involving the territory's knowledge or resources, agreements on intellectual property and fair benefit-sharing.",
    "form.cons1": "I authorise EWAO to use my data to manage this application.",
    "form.cons2": "I want to receive new opportunities and news from EWAO. I can unsubscribe at any time.",
    "form.enviar": "Send application", "form.enviando": "Sending…",
    "form.err.req": "Fill in the highlighted fields to send your application.",
    "form.err.net": "The application could not be sent. Check your connection and try again.",
    "form.ok.t": "Application sent",
    "form.ok.d": "You will receive a confirmation email. An EWAO lead will review your profile against the brief and write to you with next steps.",
    "form.ok.inv": "Because this brief follows the special research route, before you start we will send you the consent, confidentiality and community-benefit agreements.",
    "form.otra": "Apply to another brief",
    "foot.lema": "Keweriono sets the direction. EWAO turns that direction into the capacity to deliver.",
    "foot.buzon": "Community mailbox", "foot.sitio": "EWAO website", "foot.fotos": "Photos: EWAO Project (ewaoproject.com). The listings on this page are pilot examples.",
    "foot.grupo": "Academic prototype, not official, built by Group 6, International Strategy and Global Marketing, Universidad del Desarrollo, for EWAO and the Keweriono Association."
  }
};
