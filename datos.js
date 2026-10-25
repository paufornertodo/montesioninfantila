/* ==========================================================
   DATOS DE LA WEB — Colegio Montesión 'A' · Infantil
   Este es el único archivo que hay que tocar para actualizar.
   ========================================================== */

const EQUIPO = {
  id: "Montesión",
  nombre: "Colegio Montesión 'A'",
  categoria: "Infantil",
  deporte: "Fútbol sala",
  temporada: "26/27",
  escudo: "montesion.png"
};

/* Rivales: el nombre corto es el que se usa en los partidos */
const EQUIPOS = {
  "Montesión":     { nombre: "Colegio Montesión 'A'",          escudo: "montesion.png" },
  "Inter Campos":  { nombre: "Inter Campos Futbol Sala",       escudo: "inter-campos.png" },
  "Son Oliva":     { nombre: "C.D. Son Oliva F.S. 'A'",        escudo: "son-oliva.png" },
  "Viva Sports":   { nombre: "Viva Sports Masunga del V.S.",   escudo: "viva-sports.png" },
  "Juan de Ávila": { nombre: "C.S.E. Juan de Ávila \"C\"",           escudo: "juan-de-avila.png" }
};

/* Nombres que son la misma persona (se escriben como salga y la web los suma bien) */
const NOMBRES = {
  "Juan":      "Juanito",
  "Toni":      "Tonete",
  "A Burgos":  "Álvaro Burgos",
  "Álvaro B":  "Álvaro Burgos",
  "Burgos":    "Álvaro Burgos",
  "A Méndez":  "Álvaro Méndez",
  "Álvaro M":  "Álvaro Méndez",
  "Méndez":    "Álvaro Méndez"
};

/* ----------------------------------------------------------
   COMPETICIONES
   Cada partido:
     local / visitante : nombre corto del equipo
     fecha "AAAA-MM-DD", hora "HH:MM"
     gl / gv           : goles local / visitante (null = sin jugar)
   Solo en los partidos del Montesión:
     descanso          : "1-0" (marcador al descanso, como local-visitante)
     goles             : gol a gol, en orden, con el marcador en local-visitante:
                         {m:"0-1", n:"Goleador", a:"Asistente", nota:"de rechace"}
                         {m:"1-3", tipo:"rival", encaja:"Portero"}   (gol del rival)
     goleadores        : [{n:"Nombre", g:2}]  (solo si no se tiene el gol a gol)
     asistencias       : [{n:"Nombre", a:2}]  (idem: solo si no se tiene el gol a gol)
     porteros          : [{n:"Nombre", ge:1}]  (ge = goles encajados; 0 si no encajó)
     nota              : "texto suelto" (sale junto al resultado, en cursiva)
     estado            : "" | "jugando" | "descanso"  (para el directo)
   ---------------------------------------------------------- */
const COMPETICIONES = [
  {
    id: "clasificacion",
    nombre: "Fase de clasificación",
    info: "Grupo D · cinco equipos a una vuelta, del 26 de septiembre al 24 de octubre. En cada jornada descansa uno.",
    tabla: true,
    ffib: "https://www.ffib.es/Fed/NPcd/NFG_CmpJornada?cod_primaria=1000110&CodCompeticion=23348657&CodGrupo=23348661&CodTemporada=22&cod_agrupacion=&CodJornada=1&Sch_Codigo_Delegacion=1&Sch_Tipo_Juego=",   // enlace a la página oficial de la federación
    equipos: ["Montesión", "Inter Campos", "Son Oliva", "Viva Sports", "Juan de Ávila"],
    jornadas: [
      { j: 1, descansa: "Juan de Ávila", partidos: [
        { local: "Viva Sports",  visitante: "Son Oliva", fecha: "2026-09-26", hora: "16:00", pista: "P.M. Secar de la Real (parquet)", gl: 1, gv: 5 },
        { local: "Inter Campos", visitante: "Montesión", fecha: "2026-09-27", hora: "13:00", pista: "Pol. Mun. Campos (sintético)", gl: 1, gv: 6,
          descanso: "0-3", estado: "",
          goles: [
            {m:"0-1", n:"Juanito",  a:"Tomás"},
            {m:"0-2", n:"Toni",     a:"Tomás"},
            {m:"0-3", n:"Álvaro M", a:"Jaime"},
            {m:"1-3", tipo:"rival", encaja:"Santi"},
            {m:"1-4", n:"Bosco",    a:"", nota:"gol olímpico"},
            {m:"1-5", n:"Toni",     a:"", nota:"de rechace"},
            {m:"1-6", n:"Álvaro B", a:"Juanito"}
          ],
          porteros: [{n:"Santi", ge:1}, {n:"Ángel", ge:0}] }
      ]},
      { j: 2, descansa: "Inter Campos", partidos: [
        { local: "Son Oliva",    visitante: "Juan de Ávila", fecha: "2026-10-03", hora: "18:00", pista: "Pab. Son Ferragut (goma)", gl: 16, gv: 0 },
        { local: "Montesión",    visitante: "Viva Sports", fecha: "2026-10-03", hora: "17:00", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: 2, gv: 5,
          descanso: "1-1", estado: "",
          goleadores: [{n:"Bosco", g:1}, {n:"Nacho", g:1}],
          asistencias: [{n:"Toni", a:2}],
          porteros: [{n:"Santi", ge:2}, {n:"Ángel", ge:3}] }
      ]},
      { j: 3, descansa: "Son Oliva", partidos: [
        { local: "Juan de Ávila", visitante: "Montesión", fecha: "2026-10-10", hora: "10:00", pista: "P.M. Francesc de Borja Moll (goma)", gl: 1, gv: 21,
          descanso: "1-11", estado: "",
          goles: [
            {m:"1-0",  tipo:"rival", encaja:"Santi"},
            {m:"1-1",  n:"Jaime",     a:"",       nota:"de robo"},
            {m:"1-2",  n:"Tonete",    a:"Juan"},
            {m:"1-3",  n:"Álvaro M",  a:"Jaime"},
            {m:"1-4",  n:"Tomás",     a:"Jaime"},
            {m:"1-5",  n:"Juan",      a:"Nacho"},
            {m:"1-6",  n:"A Burgos",  a:"Juan"},
            {m:"1-7",  n:"A Burgos",  a:"Juan"},
            {m:"1-8",  n:"Álvaro M",  a:"Toni"},
            {m:"1-9",  n:"Bosco",     a:"Jaime"},
            {m:"1-10", n:"Juan",      a:"",       nota:"de churro"},
            {m:"1-11", n:"Pablo",     a:"",       nota:"contra el mundo"},
            {m:"1-12", n:"Bosco",     a:"Jaime"},
            {m:"1-13", n:"Toni",      a:"Nacho"},
            {m:"1-14", n:"Pepe",      a:"Tomás"},
            {m:"1-15", n:"Toni",      a:"",       nota:"de rechace"},
            {m:"1-16", n:"Juan",      a:"Pepe"},
            {m:"1-17", n:"Juan",      a:"Nacho"},
            {m:"1-18", n:"Nacho",     a:"Juan"},
            {m:"1-19", n:"A Méndez",  a:"Juan"},
            {m:"1-20", n:"Toni",      a:"",       nota:"robando"},
            {m:"1-21", n:"Tomás",     a:"",       nota:"robando"}
          ],
          porteros: [{n:"Santi", ge:1}, {n:"Ángel", ge:0}] },
        { local: "Inter Campos", visitante: "Viva Sports", fecha: "2026-10-11", hora: "11:30", pista: "Pol. Mun. Campos 2 (sintético)", gl: 1, gv: 6 }
      ]},
      { j: 4, descansa: "Montesión", partidos: [
        { local: "Viva Sports",  visitante: "Juan de Ávila", fecha: "2026-10-17", hora: "14:00", pista: "P.M. Secar de la Real (parquet)", gl: 5, gv: 3 },
        { local: "Inter Campos", visitante: "Son Oliva", fecha: "2026-10-18", hora: "13:00", pista: "Pol. Mun. Campos (sintético)", gl: 2, gv: 7 }
      ]},
      { j: 5, descansa: "Viva Sports", partidos: [
        { local: "Son Oliva",    visitante: "Montesión", fecha: "2026-10-24", hora: "18:00", pista: "Pab. Son Ferragut (goma)", gl: 5, gv: 5,
          descanso: "", estado: "",
          goles: [
            {m:"1-0", tipo:"rival", encaja:"Ángel", nota:"min. 10"},
            {m:"1-1", n:"Juanito", a:"Tomás",       nota:"min. 21"},
            {m:"2-1", tipo:"rival", encaja:"Ángel", nota:"min. 21"},
            {m:"2-2", n:"Tonete",  a:"",            nota:"min. 25"},
            {m:"2-3", tipo:"pp",                    nota:"en propia puerta de Palomares, min. 28"},
            {m:"2-4", n:"Pablo",   a:"",            nota:"min. 43"},
            {m:"2-5", n:"Juanito", a:"",            nota:"min. 46"},
            {m:"3-5", tipo:"rival", encaja:"Ángel", nota:"min. 47"},
            {m:"4-5", tipo:"rival", encaja:"Ángel", nota:"min. 52"},
            {m:"5-5", tipo:"rival", encaja:"Ángel", nota:"min. 53"}
          ],
          porteros: [{n:"Ángel", ge:5}] },
        { local: "Juan de Ávila", visitante: "Inter Campos", fecha: "2026-10-25", hora: "10:00", pista: "P.M. Francesc de Borja Moll (goma)", gl: null, gv: null }
      ]}
    ]
  },
  {
    id: "liga",
    nombre: "Liga",
    info: "Empieza al terminar la fase de clasificación. El grupo depende de cómo se acabe.",
    tabla: true,
    equipos: [],
    jornadas: []
  },
  {
    id: "copa",
    nombre: "Copa",
    info: "Al final de la temporada.",
    tabla: false,
    equipos: [],
    jornadas: []
  }
];

/* Informe del próximo rival (se muestra solo; los resultados y la clasificación salen de COMPETICIONES) */
/* Informe del próximo rival. Con rival:"" el bloque no se muestra.
   La fase de clasificación ha terminado; se volverá a llenar cuando haya rival de liga. */
const INFORME = {
  rival: "",
  notas: [],
  goleadores: [],
  plantilla: []
};

/* Galería */
const FOTOS = [
  { src: "foto-equipo.jpg",       pie: "Foto oficial del equipo y los entrenadores" },
  { src: "selfie-vestuario.jpg",  pie: "Selfie en el vestuario" },
  { src: "pina-pista.jpg",        pie: "Piña con los entrenadores en la pista" },
  { src: "colchoneta.jpg",        pie: "Descanso en la colchoneta" },
  { src: "charla-pizarra.jpg",    pie: "Charla con la pizarra antes de salir" },
  { src: "banquillo.jpg",         pie: "Últimas indicaciones en la banda" },
  { src: "vestuario-portero.jpg", pie: "En el vestuario, porteros de amarillo" }
];

/* ----------------------------------------------------------
   EL RESTO DE GRUPOS DE LA FASE DE CLASIFICACIÓN
   Siete grupos de cinco. Los dos primeros de cada uno van a
   División de Honor; el tercero y el cuarto, a Primera Regional
   (grupo B). Datos oficiales de la FFIB.
   Para actualizar: cambia pts/pj/gf/gc de cada equipo y la nota
   del grupo. El orden de la lista es el de la clasificación.
   ---------------------------------------------------------- */
const GRUPOS = {
  jornada: 5,
  fecha: "tras la jornada 5 (24-10-2026)",
  nota: "Fase cerrada en los grupos B, D y E. En los otros cuatro queda un único partido por jugar: decide la segunda plaza en el A y en el F, el primer puesto en el C y el billete de División de Honor en el G.",
  /* Análisis en prosa. Cada entrada es un párrafo; el titulo es opcional. */
  analisis: [
    { t: "El panorama",
      p: "Treinta y cinco equipos, siete grupos de cinco, una sola vuelta: cuatro partidos por equipo y una jornada de descanso. De ahí salen los catorce de División de Honor y los catorce de Primera Regional grupo B. Después de la jornada 5 la fase está cerrada en tres grupos (B, D y E) y a los otros cuatro les queda un solo partido." },
    { t: "Quiénes van a División de Honor",
      p: "Alcúdia A y Son Ferrer B (grupo A), Bar Gost – Sagrat Cor A y Son Ferrer A (B), Juan de Ávila A y Grupo Osa A (C), Son Oliva A y Viva Sports Masunga (D), Racing Andratx y E.T.B. Calvià (E), Manacor Fisiomedia A y Pont d'Inca B (F), y Pont d'Inca A más el que gane el Alcúdia B – Ciutat d'Inca A (G)." },
    { t: "Quiénes van a Primera Regional grupo B",
      p: "Entreculturas Montesión y Sant Joan A (grupo A), Palmanova A y Grupo Osa B (B), Bar Gost Sagrat Cor B y Joves d'Inca A (C), Colegio Montesión A e Inter Campos (D), Son Oliva B y Juan de Ávila B (E), Colegio Montesión B y Joves d'Inca B (F), y Sant Joan B más el que pierda el Alcúdia B – Ciutat d'Inca A (G). Se quedan fuera los siete quintos: Ciutat d'Inca B, C.D. Viva Sports, Palmanova B, Juan de Ávila C, Ciutat d'Inca C, Pedro Poveda y Manacor Fisiomedia B." },
    { t: "Los que dan miedo",
      p: "Cuatro equipos han acabado con pleno de doce puntos: el Bar Gost – Sagrat Cor A del grupo B, que es el más goleador del campeonato con 66 a favor y 5 en contra; el Alcúdia A del A, que es el menos goleado de todos con un solo tanto encajado en cuatro partidos y un 0-15 al Entreculturas en la última jornada; el Manacor Fisiomedia A del F (51:3) y el Racing Andratx del E (50:3). A ellos hay que sumar el Juan de Ávila A, nueve de nueve y 31:2 en el grupo C con un partido aún por jugar." },
    { t: "Y los coladeros",
      p: "El grupo C ha sido el más desequilibrado del campeonato: el Palmanova B lo cerró con 1 gol a favor y 100 en contra. Detrás, el Manacor B (10:56), el Pedro Poveda (6:54), el Viva Sports del grupo B (4:50) y el Juan de Ávila C de nuestro grupo (9:50), que al menos se despidió metiendo cinco." },
    { t: "Dónde encajamos nosotros",
      p: "El grupo D ha sido el más igualado de los siete: diez puntos el Son Oliva, nueve el Viva Sports y siete nosotros, los tres primeros en tres puntos. En cuatro de los otros seis grupos el líder terminó con pleno. Y nuestros 34 goles son el mejor registro del grupo y el quinto de todo el campeonato." },
    { t: "Cómo acabó",
      p: "En un 5-5 de infarto en Son Ferragut. Nos pusimos 2-5 en el minuto 46, con los goles de Pablo y Juanito en tres minutos, y el Son Oliva metió tres en los seis últimos (47, 52 y 53) para empatarlo. Y el empate no nos servía: necesitábamos ganar. El Son Oliva se llevó el grupo con diez puntos, el Viva Sports quedó segundo con nueve y nosotros terceros con siete." },
    { t: "Lo que nos ha costado la plaza",
      p: "El partido que pesó fue el 2-5 contra el Viva Sports de la segunda jornada, el único que perdimos. Ellos nos ganaron el cara a cara y acabaron un punto por delante. Por lo demás, los números son buenos: 34 goles a favor, los que más del grupo, y un balance de dos victorias, un empate y una derrota." },
    { t: "Qué viene ahora",
      p: "Terceros del grupo D significa Primera Regional, grupo B, que empieza en diciembre. No es lo que se buscaba, pero es una liga en la que el equipo puede competir arriba: con 34 goles en cuatro partidos, este equipo va a dar guerra donde lo pongan." },
    { t: "Los otros del club",
      p: "Los tres equipos del club acaban terceros de su grupo, así que los tres se van a Primera Regional grupo B. El Montesión B llegaba a la última jornada segundo del F, en puesto de División de Honor, y el 14-0 en Manacor lo dejó fuera por diferencia de goles. El Entreculturas cerró el grupo A tercero tras el 0-15 contra el Alcúdia A; para recuperar la segunda plaza necesitaría que el Sant Joan A ganara el partido que le queda al Son Ferrer B y, aun así, salir bien de un triple empate a seis puntos." }
  ],
  lista: [
    { g: "A", nota: "Queda un partido, Son Ferrer B – Sant Joan A, que decide la segunda plaza. El Entreculturas cerró su calendario con un 0-15 contra el Alcúdia A, que ha hecho pleno con 61 goles a favor y uno en contra.", equipos: [
      {n:"S.E. Alcúdia A",            pts:12, pj:4, gf:61, gc:1},
      {n:"Son Ferrer Atlètic B",      pts:6,  pj:3, gf:15, gc:23},
      {n:"Entreculturas Montesión",   pts:6,  pj:4, gf:8,  gc:23, club:true},
      {n:"Sant Joan A",               pts:3,  pj:3, gf:5,  gc:9},
      {n:"Ciutat d'Inca B",           pts:0,  pj:4, gf:4,  gc:37}
    ]},
    { g: "B", nota: "Cerrado. El Bar Gost es el equipo más goleador del campeonato (66:5) y el Son Ferrer A se aseguró la segunda plaza ganando 1-15 en la última jornada.", equipos: [
      {n:"Bar Gost · Sagrat Cor A",   pts:12, pj:4, gf:66, gc:5},
      {n:"Son Ferrer Atlètic A",      pts:9,  pj:4, gf:41, gc:12},
      {n:"Palmanova A",               pts:6,  pj:4, gf:21, gc:38},
      {n:"Grupo Osa B",               pts:3,  pj:4, gf:10, gc:37},
      {n:"C.D. Viva Sports",          pts:0,  pj:4, gf:4,  gc:50}
    ]},
    { g: "C", nota: "Queda el Juan de Ávila A – Grupo Osa A, que decide el primer puesto; salvo sorpresa los dos están ya en División de Honor. En el otro extremo, el Palmanova B acabó con 1 gol a favor y 100 en contra.", equipos: [
      {n:"Juan de Ávila A",           pts:9, pj:3, gf:31, gc:2},
      {n:"Grupo Osa A",               pts:7, pj:3, gf:38, gc:4},
      {n:"Bar Gost Sagrat Cor B",     pts:7, pj:4, gf:36, gc:9},
      {n:"Joves d'Inca A",            pts:3, pj:4, gf:21, gc:12},
      {n:"Palmanova B",               pts:0, pj:4, gf:1,  gc:100}
    ]},
    { g: "D", nuestro: true, nota: "Fase cerrada. El 5-5 de Son Ferragut dejó al Son Oliva primero y a nosotros terceros, a un punto de la segunda plaza. Fuimos el equipo más goleador del grupo.", equipos: [
      {n:"Son Oliva A",               pts:10, pj:4, gf:33, gc:8},
      {n:"Viva Sports Masunga",       pts:9,  pj:4, gf:17, gc:11},
      {n:"Colegio Montesión A",       pts:7,  pj:4, gf:34, gc:12, nos:true, club:true},
      {n:"Inter Campos",              pts:3,  pj:4, gf:12, gc:24},
      {n:"Juan de Ávila C",           pts:0,  pj:4, gf:9,  gc:50}
    ]},
    { g: "E", nota: "Cerrado y sin sorpresas. Andratx y Calvià se separaron del resto en la última jornada con un 0-17 y un 8-2, y se van los dos a División de Honor.", equipos: [
      {n:"Racing Club Andratx",       pts:12, pj:4, gf:50, gc:3},
      {n:"E.T.B. Calvià",             pts:9,  pj:4, gf:31, gc:19},
      {n:"Son Oliva B",               pts:6,  pj:4, gf:21, gc:28},
      {n:"Juan de Ávila B",           pts:3,  pj:4, gf:15, gc:26},
      {n:"Ciutat d'Inca C",           pts:0,  pj:4, gf:8,  gc:49}
    ]},
    { g: "F", nota: "El 14-0 del Manacor A en la última jornada echó al Montesión B del segundo puesto por diferencia de goles. Queda por jugarse el aplazado Pont d'Inca B – Joves d'Inca B, que confirmaría la plaza de División de Honor del Pont d'Inca.", equipos: [
      {n:"Manacor Fisiomedia A",      pts:12, pj:4, gf:51, gc:3},
      {n:"Pont d'Inca B",             pts:6,  pj:3, gf:21, gc:10},
      {n:"Colegio Montesión B",       pts:6,  pj:4, gf:16, gc:24, club:true},
      {n:"Joves d'Inca B",            pts:3,  pj:3, gf:12, gc:15},
      {n:"ACC Pedro Poveda",          pts:0,  pj:4, gf:6,  gc:54}
    ]},
    { g: "G", nota: "Todo se decide en el único partido que queda, Alcúdia B – Ciutat d'Inca A: el ganador acompaña al Pont d'Inca A en División de Honor y el perdedor cae a Primera Regional. Con empate, la segunda plaza sería del Ciutat d'Inca A.", equipos: [
      {n:"Pont d'Inca A",             pts:10, pj:4, gf:38, gc:4},
      {n:"Ciutat d'Inca A",           pts:6,  pj:3, gf:25, gc:8},
      {n:"S.E. Alcúdia B",            pts:5,  pj:3, gf:18, gc:10},
      {n:"Sant Joan B",               pts:4,  pj:4, gf:13, gc:26},
      {n:"Manacor Fisiomedia B",      pts:0,  pj:4, gf:10, gc:56}
    ]}
  ]
};