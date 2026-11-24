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
  "Juan de Ávila": { nombre: "C.S.E. Juan de Ávila \"C\"",           escudo: "juan-de-avila.png" },
  /* Liga Preferente */
  "Pont d'Inca B":   { nombre: "AD La Salle Pont d'Inca FS \"B\"",   escudo: "" },
  "Joves d'Inca A":  { nombre: "C.F.S. Joves d'Inca \"A\"",          escudo: "" },
  "Ciutat d'Inca A": { nombre: "C.E. Ciutat d'Inca Futsal \"A\"",    escudo: "" },
  "Grupo Osa B":     { nombre: "Urbanitzacions Grupo Osa \"B\"",     escudo: "" },
  "CD Viva Sports":  { nombre: "Club Deportivo Viva Sports",          escudo: "" },
  "Palmanova A":     { nombre: "C.E. Palmanova \"A\"",               escudo: "" },
  "Entreculturas":   { nombre: "Entreculturas Montesión",             escudo: "" },
  "Sant Joan A":     { nombre: "Sant Joan C.E. \"A\"",               escudo: "" },
  "Sant Joan B":     { nombre: "Sant Joan C.E. \"B\"",               escudo: "" },
  "Calvià":          { nombre: "E.T.B. Calvià",                       escudo: "" },
  "Son Oliva B":     { nombre: "C.D. Son Oliva F.S. \"B\"",          escudo: "son-oliva.png" }
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
  "Méndez":    "Álvaro Méndez",
  "Ripoll":    "Jaime"
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
    nombre: "Liga Preferente",
    info: "Liga Regular Infantil Futsal Mallorca, grupo Preferente. Doce equipos a doble vuelta: 22 jornadas, del 31 de octubre al 2 de mayo. De la jornada 3 en adelante solo está nuestro partido; las fechas lejanas son orientativas hasta que la FFIB fije horarios.",
    tabla: true,
    ffib: "https://www.ffib.es/Fed/NPcd/NFG_CmpJornada?cod_primaria=1000110&CodCompeticion=23348753&CodGrupo=23348755&CodTemporada=22&cod_agrupacion=&CodJornada=1&Sch_Codigo_Delegacion=&Sch_Tipo_Juego=",
    descuentos: { "Palmanova A": 3 },   // puntos restados por la FFIB (sanción)
    equipos: ["Montesión", "Pont d'Inca B", "Joves d'Inca A", "Ciutat d'Inca A", "Grupo Osa B", "CD Viva Sports", "Palmanova A", "Entreculturas", "Sant Joan A", "Sant Joan B", "Calvià", "Son Oliva B"],
    jornadas: [
      { j: 1, partidos: [
        { local: "Sant Joan B",     visitante: "Grupo Osa B",     fecha: "2026-10-31", hora: "12:40", pista: "P.M. Son Juny (goma)", gl: 2, gv: 5 },
        { local: "Son Oliva B",     visitante: "Joves d'Inca A",  fecha: "2026-10-31", hora: "16:15", pista: "Pab. Son Ferragut (goma)", gl: 1, gv: 10 },
        { local: "Montesión",       visitante: "Pont d'Inca B",   fecha: "2026-10-31", hora: "18:45", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: 2, gv: 2,
          descanso: "", estado: "",
          goles: [
            {m:"1-0", n:"Bosco",   a:"", nota:"min. 10"},
            {m:"1-1", tipo:"rival",      nota:"min. 39"},
            {m:"2-1", n:"Juanito", a:"", nota:"min. 50"},
            {m:"2-2", tipo:"rival",      nota:"min. 60"}
          ],
          porteros: [] },
        { local: "CD Viva Sports",  visitante: "Entreculturas",   fecha: "2026-11-16", hora: "19:20", pista: "P.M. Secar de la Real (parquet)", gl: 6, gv: 1, nota: "Aplazado del 1/11" },
        { local: "Calvià",          visitante: "Ciutat d'Inca A", fecha: "2026-11-01", hora: "17:30", pista: "P.M. Galatzo (sintético)", gl: 4, gv: 11 },
        { local: "Palmanova A",     visitante: "Sant Joan A",     fecha: "2026-11-03", hora: "19:15", pista: "Palmanova (pista exterior)", gl: null, gv: null, nota: "Suspendido" }
      ]},
      { j: 2, partidos: [
        { local: "Joves d'Inca A",  visitante: "Montesión",       fecha: "2026-11-07", hora: "11:00", pista: "Pab. Mun. Sa Creu (sintético)", gl: 2, gv: 2,
          descanso: "1-2", estado: "",
          goles: [
            {m:"0-1", n:"Jaime", a:"",      nota:"jugada individual"},
            {m:"1-1", tipo:"rival", encaja:"Ángel"},
            {m:"1-2", n:"Nacho", a:"Jaime"},
            {m:"2-2", tipo:"rival", encaja:"Ángel"}
          ],
          porteros: [{n:"Ángel", ge:2}] },
        { local: "Pont d'Inca B",   visitante: "CD Viva Sports",  fecha: "2026-11-07", hora: "12:00", pista: "P.M. La Salle Pont d'Inca (goma)", gl: 4, gv: 7 },
        { local: "Sant Joan A",     visitante: "Son Oliva B",     fecha: "2026-11-07", hora: "15:45", pista: "P.M. Son Juny (goma)", gl: 4, gv: 1 },
        { local: "Grupo Osa B",     visitante: "Calvià",          fecha: "2026-11-06", hora: "20:00", pista: "P.M. S'Arenal (sintético)", gl: 5, gv: 7 },
        { local: "Entreculturas",   visitante: "Sant Joan B",     fecha: "2026-11-08", hora: "12:45", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: 6, gv: 3 },
        { local: "Ciutat d'Inca A", visitante: "Palmanova A",     fecha: "2026-11-08", hora: "13:00", pista: "Pol. La Salle Inca (sintético)", gl: 3, gv: 0 }
      ]},
      { j: 3, partidos: [
        { local: "Montesión",       visitante: "CD Viva Sports",  fecha: "2026-11-12", hora: "18:15", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: 2, gv: 4,
          descanso: "1-0", estado: "",
          goles: [
            {m:"1-0", n:"Juanito", a:"Jaime", nota:"min. 4"},
            {m:"2-0", n:"Jaime",   a:"",      nota:"jugada individual · min. 31"},
            {m:"2-1", tipo:"rival", encaja:"Ángel", nota:"min. 32"},
            {m:"2-2", tipo:"rival", encaja:"Ángel", nota:"min. 41"},
            {m:"2-3", tipo:"rival", encaja:"Ángel", nota:"min. 45"},
            {m:"2-4", tipo:"rival", encaja:"Santi", nota:"min. 57"}
          ],
          porteros: [{n:"Ángel", ge:3}, {n:"Santi", ge:1}] },
        { local: "Joves d'Inca A",  visitante: "Sant Joan A",     fecha: "2026-11-14", hora: "10:00", pista: "Pab. Mun. Sa Creu (sintético)", gl: 6, gv: 1 },
        { local: "Palmanova A",     visitante: "Grupo Osa B",     fecha: "2026-11-14", hora: "16:00", pista: "Palmanova (pista exterior)", gl: 7, gv: 6 },
        { local: "Calvià",          visitante: "Entreculturas",   fecha: "2026-11-14", hora: "17:30", pista: "P.M. Galatzo (sintético)", gl: 4, gv: 4 },
        { local: "Son Oliva B",     visitante: "Ciutat d'Inca A", fecha: "2026-11-14", hora: "18:00", pista: "Pab. Son Ferragut (goma)", gl: 3, gv: 4 },
        { local: "Sant Joan B",     visitante: "Pont d'Inca B",   fecha: "2026-11-15", hora: "11:45", pista: "P.M. Son Juny (goma)", gl: 1, gv: 6 }
      ]},
      { j: 4, partidos: [
        { local: "Pont d'Inca B",   visitante: "Calvià",          fecha: "2026-11-21", hora: "13:00", pista: "P.M. La Salle Pont d'Inca (goma)", gl: 3, gv: 1 },
        { local: "Grupo Osa B",     visitante: "Son Oliva B",     fecha: "2026-11-21", hora: "17:00", pista: "P.M. S'Arenal (sintético)", gl: 2, gv: 4 },
        { local: "Entreculturas",   visitante: "Palmanova A",     fecha: "2026-11-21", hora: "18:00", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: 6, gv: 5 },
        { local: "Sant Joan A",     visitante: "Montesión",       fecha: "2026-11-22", hora: "12:00", pista: "P.M. Son Juny (goma)", gl: 2, gv: 13,
          descanso: "1-6", estado: "",
          goles: [
            {m:"0-1",  n:"Nacho",    a:"Ángel"},
            {m:"0-2",  n:"Bosco",    a:""},
            {m:"0-3",  n:"Álvaro M", a:"Burgos"},
            {m:"0-4",  n:"Tomás",    a:"Pablo"},
            {m:"1-4",  tipo:"rival", encaja:"Santi"},
            {m:"1-5",  n:"Burgos",   a:"Pablo"},
            {m:"1-6",  n:"Juanito",  a:""},
            {m:"2-6",  tipo:"rival", encaja:"Ángel"},
            {m:"2-7",  n:"Álvaro M", a:""},
            {m:"2-8",  n:"Tonete",   a:""},
            {m:"2-9",  n:"Nacho",    a:"Tomás"},
            {m:"2-10", n:"Bosco",    a:""},
            {m:"2-11", n:"Juanito",  a:"Burgos"},
            {m:"2-12", n:"Juanito",  a:"Ripoll"},
            {m:"2-13", n:"Juanito",  a:"Ripoll"}
          ],
          porteros: [{n:"Santi", ge:1}, {n:"Ángel", ge:1}] },
        { local: "Ciutat d'Inca A", visitante: "Joves d'Inca A",  fecha: "2026-11-22", hora: "11:30", pista: "Pol. La Salle Inca (sintético)", gl: 3, gv: 1 },
        { local: "CD Viva Sports",  visitante: "Sant Joan B",     fecha: "2026-11-21", hora: "10:30", pista: "P.M. Secar de la Real (parquet)", gl: 6, gv: 3 }
      ]},
      { j: 5, partidos: [
        { local: "Palmanova A",     visitante: "Pont d'Inca B",   fecha: "2026-11-27", hora: "20:45", pista: "Palmanova (pista exterior)", gl: null, gv: null },
        { local: "Montesión",       visitante: "Sant Joan B",     fecha: "2026-11-28", hora: "11:15", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] },
        { local: "Son Oliva B",     visitante: "Entreculturas",   fecha: "2026-11-28", hora: "18:00", pista: "Pab. Son Ferragut (goma)", gl: null, gv: null },
        { local: "Joves d'Inca A",  visitante: "Grupo Osa B",     fecha: "2026-11-28", hora: "18:15", pista: "Pab. Mun. Sa Creu (sintético)", gl: null, gv: null },
        { local: "Sant Joan A",     visitante: "Ciutat d'Inca A", fecha: "2026-11-29", hora: "12:00", pista: "P.M. Son Juny (goma)", gl: null, gv: null },
        { local: "Calvià",          visitante: "CD Viva Sports",  fecha: "2026-11-29", hora: "17:00", pista: "P.M. Galatzo (sintético)", gl: null, gv: null }
      ]},
      { j: 6, partidos: [
        { local: "Ciutat d'Inca A", visitante: "Montesión", fecha: "2026-12-06", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 7, partidos: [
        { local: "Montesión", visitante: "Calvià", fecha: "2026-12-13", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 8, partidos: [
        { local: "Grupo Osa B", visitante: "Montesión", fecha: "2026-12-20", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 9, partidos: [
        { local: "Montesión", visitante: "Palmanova A", fecha: "2027-01-10", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 10, partidos: [
        { local: "Montesión", visitante: "Entreculturas", fecha: "2027-01-17", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 11, partidos: [
        { local: "Son Oliva B", visitante: "Montesión", fecha: "2027-01-24", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 12, partidos: [
        { local: "Pont d'Inca B", visitante: "Montesión", fecha: "2027-02-06", hora: "12:40", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 13, partidos: [
        { local: "Montesión", visitante: "Joves d'Inca A", fecha: "2027-02-14", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 14, partidos: [
        { local: "CD Viva Sports", visitante: "Montesión", fecha: "2027-02-21", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 15, partidos: [
        { local: "Montesión", visitante: "Sant Joan A", fecha: "2027-02-28", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 16, partidos: [
        { local: "Sant Joan B", visitante: "Montesión", fecha: "2027-03-07", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 17, partidos: [
        { local: "Montesión", visitante: "Ciutat d'Inca A", fecha: "2027-03-14", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 18, partidos: [
        { local: "Calvià", visitante: "Montesión", fecha: "2027-03-21", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 19, partidos: [
        { local: "Montesión", visitante: "Grupo Osa B", fecha: "2027-04-04", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 20, partidos: [
        { local: "Palmanova A", visitante: "Montesión", fecha: "2027-04-10", hora: "18:00", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 21, partidos: [
        { local: "Entreculturas", visitante: "Montesión", fecha: "2027-04-18", hora: "", pista: "", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]},
      { j: 22, partidos: [
        { local: "Montesión", visitante: "Son Oliva B", fecha: "2027-05-02", hora: "", pista: "Pab. S. Pedro Claver (Montesión) (goma)", gl: null, gv: null,
          descanso: "", estado: "", goles: [], porteros: [] }
      ]}
    ]
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

/* Informe del próximo rival. Con rival:"" el bloque no se muestra.
   Resultados y puesto salen solos de COMPETICIONES; goleadores y notas, de las actas de la FFIB. */
const INFORME = {
  rival: "Sant Joan B",
  goleadoresTitulo: "Sus goleadores esta temporada",
  goleadores: [
    {d:"", n:"Toni C.",    g:3},
    {d:"", n:"Cadmiel L.", g:2},
    {d:"", n:"Guillem B.", g:2},
    {d:"", n:"Roc F.",     g:1},
    {d:"", n:"Marc N.",    g:1}
  ],
  notas: [
    "Sábado 28 a las 11:15 en casa, en el Pab. S. Pedro Claver (goma).",
    "Son el colista de la liga: cuatro partidos y cuatro derrotas, con 9 goles a favor y 23 en contra.",
    "Perdieron 2-5 con el Grupo Osa B, 6-3 en la pista del Entreculturas, 1-6 con el Pont d'Inca B y 6-3 este sábado en la pista del CD Viva Sports, el equipo que nos ganó 2-4.",
    "En la fase de clasificación fueron cuartos del grupo G: 4 puntos y 13:26.",
    "Es el filial del Sant Joan A al que acabamos de ganar 2-13 en Son Juny."
  ],
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
   LAS OTRAS LIGAS
   Ya se juega la liga. Nosotros estamos en la Preferente; aquí va
   un resumen cortito de los otros dos grupos: quién va arriba.
   Cada liga: nombre, tras (jornada), arriba (los 3-4 primeros:
   n, pts, pj) y nota (una o dos frases). Datos oficiales de la FFIB.
   ---------------------------------------------------------- */
const GRUPOS = {
  ligas: [
    { nombre: "División de Honor", tras: "Tras la jornada 4",
      nota: "Bar Gost A y Son Oliva A, el que ganó nuestro grupo de la fase de clasificación, van con pleno. El Alcúdia A, con un partido menos, solo ha encajado un gol.",
      arriba: [
        {n:"Bar Gost · Sagrat Cor A", pts:12, pj:4},
        {n:"Son Oliva A",             pts:12, pj:4},
        {n:"Alcúdia A",               pts:9,  pj:3},
        {n:"Manacor Fisiomedia A",    pts:9,  pj:4}
      ]},
    { nombre: "Primera Regional", tras: "Tras la jornada 4",
      nota: "Cuatro empatados a 9 puntos, y dos son rivales de nuestro grupo de la fase de clasificación: el Viva Sports Masunga, que no ha perdido, y el Inter Campos. El Montesión B va 8.º con 3 puntos.",
      arriba: [
        {n:"Viva Sports Masunga",     pts:9, pj:3},
        {n:"Manacor Fisiomedia B",    pts:9, pj:4},
        {n:"Joves d'Inca B",          pts:9, pj:3},
        {n:"Inter Campos",            pts:9, pj:4}
      ]}
  ],
  fase: "La fase de clasificación se cerró el 24 de octubre. Acabamos terceros del grupo D con 7 puntos y 34:12, a uno de la segunda plaza, y fuimos el equipo más goleador del grupo. Desde el 31 de octubre ya se juega la liga."
};