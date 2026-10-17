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
        { local: "Inter Campos", visitante: "Son Oliva", fecha: "2026-10-18", hora: "13:00", pista: "Pol. Mun. Campos (sintético)", gl: null, gv: null }
      ]},
      { j: 5, descansa: "Viva Sports", partidos: [
        { local: "Son Oliva",    visitante: "Montesión", fecha: "2026-10-24", hora: "18:00", pista: "Pab. Son Ferragut (goma)", gl: null, gv: null,
          descanso: "", estado: "", goleadores: [], porteros: [] },
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
const INFORME = {
  rival: "Son Oliva",
  notas: [
    "El líder y el único invicto del grupo: 5-1 al Viva Sports y 16-0 al Juan de Ávila.",
    "21 goles a favor y solo 1 en contra. Ese gol se lo marcó el Viva Sports en la primera jornada.",
    "Jugamos en su pista, el Son Ferragut, y es el último partido de la fase.",
    "La FFIB no publica quién marca en esta categoría, así que el acta no da autores."
  ],
  goleadores: [],   // [{d:10, n:"Nombre", g:1}] si se sabe
  plantilla: [      // convocados en la J2 según el acta de la FFIB (dorsal y nombre)
    {d:1,  n:"Fernando P."}, {d:3,  n:"Adrià C."},  {d:6,  n:"José Daniel C."}, {d:7,  n:"Baltasar G."},
    {d:10, n:"Noah P."},     {d:11, n:"Samuel C."}, {d:19, n:"Matheo F."},      {d:21, n:"Dani V."},
    {d:25, n:"Gabriel B."},  {d:80, n:"Xavi A."}
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
  jornada: 4,
  fecha: "grupo D tras la jornada 4; el resto, tras la 3",
  nota: "En el grupo D falta por jugarse el Inter Campos – Son Oliva. Los otros seis grupos están disputando su cuarta jornada este fin de semana, así que sus tablas son de la jornada 3. Ojo también con el descanso rotativo: no todos han jugado los mismos partidos.",
  /* Análisis en prosa. Cada entrada es un párrafo; el titulo es opcional. */
  analisis: [
    { t: "El panorama",
      p: "Treinta y cinco equipos repartidos en siete grupos de cinco, a una sola vuelta. Cada equipo juega cuatro partidos y descansa una jornada. De ahí salen los catorce que irán a División de Honor. Con tres jornadas disputadas y dos por jugar, casi todos los grupos siguen abiertos." },
    { t: "Los que dan miedo",
      p: "El Bar Gost – Sagrat Cor A del grupo B se ha puesto por delante de todos: tres victorias, 49 goles a favor y 2 en contra, con un 21-1 y un 21-0 seguidos. El Pont d'Inca A del G es el otro con pleno, 35:1 y un 20-1 al Manacor. Detrás, el grupo C sigue siendo un campo de tiro: el Grupo Osa A lleva 35:1, el Juan de Ávila A 28:0 y hasta el Bar Gost B, que es tercero, acaba de ganar 31-0. El Palmanova B de ese grupo ha encajado 83 goles en tres partidos." },
    { t: "Dónde encajamos nosotros",
      p: "Nuestro 29:7 es de los mejores del campeonato, aunque conviene recordar que 21 de esos goles fueron contra el colista, igual que pasa con las cifras infladas de otros grupos. El dato que importa es otro: el grupo D es el más igualado de los siete, con tres equipos empatados a seis puntos. En ningún otro grupo hay tanta pelea arriba." },
    { t: "Cómo está la pelea",
      p: "El Viva Sports ya ha acabado su calendario y se ha quedado con nueve puntos. Le costó más de lo esperado: ganó 5-3 al Juan de Ávila C, el colista, y se quedó con un 17:11 que es, de largo, la peor diferencia de goles de los tres de arriba. Nosotros y el Son Oliva seguimos con seis, y los dos tenemos partido pendiente: precisamente el nuestro, el uno contra el otro." },
    { t: "Las cuentas",
      p: "No hay vuelta de hoja: hay que ganar el 24 en Son Ferragut. Ganando llegamos a nueve, igualamos al Viva Sports y nuestra diferencia de goles es mucho mejor que la suya, así que la plaza sería nuestra. Empatar no sirve, porque nos quedaríamos en siete. Y perder tampoco, claro. Antes, este domingo, el Son Oliva juega en Campos: si gana se pone a nueve y llega al último partido con todo a favor." },
    { t: "Los dos del club",
      p: "El Montesión B sigue en puesto de División de Honor, segundo del grupo F, aunque su partido de la tercera jornada todavía no figura en el acta. El Entreculturas, en cambio, ha perdido 3-5 contra el Son Ferrer B y se ha caído a la tercera plaza del grupo A: ahora mismo se quedaría en Primera Regional." }
  ],
  lista: [
    { g: "A", nota: "Se ha apretado. El Son Ferrer B encajó un 19-0 en el estreno y desde entonces lleva dos victorias, una de ellas al Entreculturas, al que ha echado de los dos primeros puestos.", equipos: [
      {n:"S.E. Alcúdia A",            pts:6, pj:2, gf:25, gc:1},
      {n:"Son Ferrer Atlètic B",      pts:6, pj:3, gf:15, gc:23},
      {n:"Entreculturas Montesión",   pts:3, pj:2, gf:6,  gc:7, club:true},
      {n:"Sant Joan A",               pts:3, pj:2, gf:4,  gc:7},
      {n:"Ciutat d'Inca B",           pts:0, pj:3, gf:4,  gc:16}
    ]},
    { g: "B", nota: "El Bar Gost es la apisonadora del campeonato: tres de tres, 49 goles a favor y 2 en contra. El grupo tiene además dos equipos con solo uno y dos partidos jugados.", equipos: [
      {n:"Bar Gost · Sagrat Cor A",   pts:9, pj:3, gf:49, gc:2},
      {n:"Son Ferrer Atlètic A",      pts:3, pj:2, gf:12, gc:9},
      {n:"Palmanova A",               pts:3, pj:1, gf:5,  gc:4},
      {n:"C.D. Viva Sports",          pts:0, pj:1, gf:0,  gc:21},
      {n:"Grupo Osa B",               pts:0, pj:3, gf:7,  gc:37}
    ]},
    { g: "C", nota: "Tres equipos a seis puntos y los tres con números de escándalo. El Palmanova B lleva 0 goles a favor y 83 en contra en tres partidos.", equipos: [
      {n:"Grupo Osa A",               pts:6, pj:2, gf:35, gc:1},
      {n:"Juan de Ávila A",           pts:6, pj:2, gf:28, gc:0},
      {n:"Bar Gost Sagrat Cor B",     pts:6, pj:3, gf:33, gc:6},
      {n:"Joves d'Inca A",            pts:0, pj:2, gf:2,  gc:8},
      {n:"Palmanova B",               pts:0, pj:3, gf:0,  gc:83}
    ]},
    { g: "D", nuestro: true, nota: "El nuestro. El Viva Sports ya ha terminado sus cuatro partidos y manda con nueve puntos, aunque su 5-3 al colista le ha dejado una diferencia de goles pobre. Falta el Inter Campos – Son Oliva.", equipos: [
      {n:"Viva Sports Masunga",       pts:9, pj:4, gf:17, gc:11},
      {n:"Colegio Montesión A",       pts:6, pj:3, gf:29, gc:7, nos:true, club:true},
      {n:"Son Oliva A",               pts:6, pj:2, gf:21, gc:1},
      {n:"Inter Campos",              pts:0, pj:2, gf:2,  gc:12},
      {n:"Juan de Ávila C",           pts:0, pj:3, gf:4,  gc:42}
    ]},
    { g: "E", nota: "Andratx y Calvià, los dos con pleno de victorias, se juegan el grupo entre ellos. El Son Oliva B sacó su primera victoria en un 5-4 ajustado.", equipos: [
      {n:"Racing Club Andratx",       pts:6, pj:2, gf:21, gc:2},
      {n:"E.T.B. Calvià",             pts:6, pj:2, gf:22, gc:5},
      {n:"Son Oliva B",               pts:3, pj:3, gf:11, gc:23},
      {n:"Juan de Ávila B",           pts:0, pj:2, gf:4,  gc:16},
      {n:"Ciutat d'Inca C",           pts:0, pj:1, gf:1,  gc:13}
    ]},
    { g: "F", nota: "El Manacor A ha pasado por encima del grupo y se ha puesto líder. El Montesión B sigue segundo, pero su partido de la jornada 3 todavía no figura como jugado.", equipos: [
      {n:"Manacor Fisiomedia A",      pts:6, pj:2, gf:19, gc:2},
      {n:"Colegio Montesión B",       pts:3, pj:1, gf:12, gc:3, club:true},
      {n:"Joves d'Inca B",            pts:3, pj:2, gf:10, gc:12},
      {n:"Pont d'Inca B",             pts:0, pj:1, gf:1,  gc:8},
      {n:"ACC Pedro Poveda",          pts:0, pj:2, gf:4,  gc:21}
    ]},
    { g: "G", nota: "El Pont d'Inca A va lanzado con pleno de victorias y un 35:1. El Ciutat d'Inca A ha reaccionado con un 17-2 y se ha metido en la pelea.", equipos: [
      {n:"Pont d'Inca A",             pts:9, pj:3, gf:35, gc:1},
      {n:"S.E. Alcúdia B",            pts:4, pj:2, gf:15, gc:7},
      {n:"Ciutat d'Inca A",           pts:3, pj:2, gf:17, gc:7},
      {n:"Sant Joan B",               pts:1, pj:2, gf:4,  gc:14},
      {n:"Manacor Fisiomedia B",      pts:0, pj:3, gf:6,  gc:48}
    ]}
  ]
};
