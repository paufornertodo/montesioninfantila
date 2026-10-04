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
  // "Guille": "Guillermo",
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
        { local: "Juan de Ávila", visitante: "Montesión", fecha: "2026-10-10", hora: "", pista: "P.M. Francesc de Borja Moll (goma)", gl: null, gv: null,
          descanso: "", estado: "", goleadores: [], porteros: [] },
        { local: "Inter Campos", visitante: "Viva Sports", fecha: "2026-10-10", hora: "", pista: "Pol. Mun. Campos (sintético)", gl: null, gv: null }
      ]},
      { j: 4, descansa: "Montesión", partidos: [
        { local: "Inter Campos", visitante: "Son Oliva", fecha: "2026-10-17", hora: "", pista: "Pol. Mun. Campos (sintético)", gl: null, gv: null },
        { local: "Viva Sports",  visitante: "Juan de Ávila", fecha: "2026-10-17", hora: "", pista: "P.M. Secar de la Real (parquet)", gl: null, gv: null }
      ]},
      { j: 5, descansa: "Viva Sports", partidos: [
        { local: "Son Oliva",    visitante: "Montesión", fecha: "2026-10-24", hora: "", pista: "Pab. Son Ferragut (goma)", gl: null, gv: null,
          descanso: "", estado: "", goleadores: [], porteros: [] },
        { local: "Juan de Ávila", visitante: "Inter Campos", fecha: "2026-10-24", hora: "", pista: "P.M. Francesc de Borja Moll (goma)", gl: null, gv: null }
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
const INFORME = {
  rival: "Juan de Ávila",
  notas: [
    "Descansaron en la J1, así que el 16-0 de Son Ferragut fue su estreno en la fase.",
    "Encajaron 8 goles en cada parte y no llegaron a marcar: 0 goles a favor en toda la jornada.",
    "Les metieron 4 goles en apenas tres minutos, entre el 15' y el 17'.",
    "La FFIB no publica quién marca en esta categoría, así que el acta no da autores."
  ],
  goleadores: [],   // [{d:10, n:"Nombre", g:1}] si se sabe
  plantilla: [      // convocados en la J2 según el acta de la FFIB (dorsal y nombre)
    {d:1,  n:"Pedro C."},   {d:2,  n:"Francisco B."}, {d:3,  n:"Toni D."},    {d:5,  n:"Zakaria L."},
    {d:6,  n:"Asse S."},    {d:7,  n:"Benjamín V."},  {d:9,  n:"Goro F."},    {d:12, n:"Juan Antonio F."},
    {d:14, n:"Vicente B."}, {d:15, n:"Manuel M."},    {d:16, n:"Jannat E."}
  ]
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
  jornada: 2,
  fecha: "tras la jornada 2",
  nota: "Ojo con comparar: por el descanso rotativo no todos han jugado los mismos partidos, y aún quedan tres jornadas.",
  lista: [
    { g: "A", nota: "El Alcúdia manda con un 25:1 y un 19-0 al Son Ferrer. El Entreculturas, el otro infantil del club, es segundo con un partido menos.", equipos: [
      {n:"S.E. Alcúdia A",            pts:6, pj:2, gf:25, gc:1},
      {n:"Entreculturas Montesión",   pts:3, pj:1, gf:3,  gc:2, club:true},
      {n:"Son Ferrer Atlètic B",      pts:3, pj:2, gf:10, gc:20},
      {n:"Sant Joan A",               pts:0, pj:1, gf:1,  gc:6},
      {n:"Ciutat d'Inca B",           pts:0, pj:2, gf:3,  gc:13}
    ]},
    { g: "B", nota: "El Bar Gost arrasa: 28 goles a favor y 2 en contra, con un 21-1 en la segunda jornada. El Palmanova – Viva Sports se suspendió.", equipos: [
      {n:"Bar Gost · Sagrat Cor A",   pts:6, pj:2, gf:28, gc:2},
      {n:"Palmanova A",               pts:3, pj:1, gf:5,  gc:4},
      {n:"C.D. Viva Sports",          pts:0, pj:0, gf:0,  gc:0},
      {n:"Son Ferrer Atlètic A",      pts:0, pj:1, gf:1,  gc:7},
      {n:"Grupo Osa B",               pts:0, pj:2, gf:5,  gc:26}
    ]},
    { g: "C", nota: "El grupo de las goleadas: el Juan de Ávila A lleva 28-0 y el Grupo Osa ganó 29-0 en su estreno. El Palmanova B ha encajado 52 en dos partidos.", equipos: [
      {n:"Juan de Ávila A",           pts:6, pj:2, gf:28, gc:0},
      {n:"Grupo Osa A",               pts:3, pj:1, gf:29, gc:0},
      {n:"Bar Gost Sagrat Cor B",     pts:3, pj:2, gf:2,  gc:6},
      {n:"Joves d'Inca A",            pts:0, pj:1, gf:1,  gc:2},
      {n:"Palmanova B",               pts:0, pj:2, gf:0,  gc:52}
    ]},
    { g: "D", nuestro: true, nota: "El nuestro. El Son Oliva se ha escapado con un 21:1 y nosotros somos segundos, por delante del Viva Sports por diferencia de goles.", equipos: [
      {n:"Son Oliva A",               pts:6, pj:2, gf:21, gc:1},
      {n:"Colegio Montesión A",       pts:3, pj:2, gf:8,  gc:6, nos:true, club:true},
      {n:"Viva Sports Masunga",       pts:3, pj:2, gf:6,  gc:7},
      {n:"Inter Campos",              pts:0, pj:1, gf:1,  gc:6},
      {n:"Juan de Ávila C",           pts:0, pj:1, gf:0,  gc:16}
    ]},
    { g: "E", nota: "El Racing Andratx domina con 21:2. El Ciutat d'Inca C todavía no ha jugado ningún partido.", equipos: [
      {n:"Racing Club Andratx",       pts:6, pj:2, gf:21, gc:2},
      {n:"E.T.B. Calvià",             pts:3, pj:1, gf:9,  gc:4},
      {n:"Ciutat d'Inca C",           pts:0, pj:0, gf:0,  gc:0},
      {n:"Juan de Ávila B",           pts:0, pj:1, gf:0,  gc:11},
      {n:"Son Oliva B",               pts:0, pj:2, gf:6,  gc:19}
    ]},
    { g: "F", nota: "Aquí juega el Montesión B, y va líder: ganó 12-3 al Pedro Poveda y manda por diferencia de goles en un triple empate a tres puntos.", equipos: [
      {n:"Colegio Montesión B",       pts:3, pj:1, gf:12, gc:3, club:true},
      {n:"Joves d'Inca B",            pts:3, pj:1, gf:9,  gc:1},
      {n:"Manacor Fisiomedia A",      pts:3, pj:1, gf:8,  gc:1},
      {n:"Pont d'Inca B",             pts:0, pj:1, gf:1,  gc:8},
      {n:"ACC Pedro Poveda",          pts:0, pj:2, gf:4,  gc:21}
    ]},
    { g: "G", nota: "El Pont d'Inca A va lanzado con un 25:1, con un 20-1 al Manacor B incluido. Es el único grupo con empates.", equipos: [
      {n:"Pont d'Inca A",             pts:6, pj:2, gf:25, gc:1},
      {n:"S.E. Alcúdia B",            pts:4, pj:2, gf:15, gc:7},
      {n:"Sant Joan B",               pts:1, pj:1, gf:4,  gc:4},
      {n:"Ciutat d'Inca A",           pts:0, pj:1, gf:0,  gc:5},
      {n:"Manacor Fisiomedia B",      pts:0, pj:2, gf:4,  gc:31}
    ]}
  ]
};
