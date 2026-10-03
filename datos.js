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
