const malla = [
  {
    semestre: 1,
    ramos: [
      "Matemáticas Básicas",
      "Geometría Vectorial y Analítica",
      "Introducción a la Informática",
      "Introducción a la Formación Profesional",
      "Habilidades Comunicativas",
    ],
  },
  {
    semestre: 2,
    ramos: [
      "Cálculo Diferencial",
      "Álgebra Lineal",
      "Química Básica y Laboratorio",
      "Biología Celular",
      "Inglés I",
    ],
  },
  {
    semestre: 3,
    ramos: [
      "Cálculo Integral",
      "Física Mecánica y Laboratorio",
      "Introducción a las Biomoléculas",
      "Algoritmia y Programación",
      "Inglés II",
    ],
  },
  {
    semestre: 4,
    ramos: [
      "Ecuaciones Diferenciales",
      "Física de Campos y Laboratorio",
      "Bioquímica Médica",
      "Morfofisiología I",
      "Inglés III",
    ],
  },
  {
    semestre: 5,
    ramos: [
      "Métodos Numéricos",
      "Circuitos Eléctricos",
      "Biología Molecular",
      "Morfofisiología II",
      "Inglés IV",
    ],
  },
  {
    semestre: 6,
    ramos: [
      "Biofísica",
      "Biomateriales",
      "Electrónica Análoga y de Potencia",
      "Diseño Biomédico",
    ],
  },
  {
    semestre: 7,
    ramos: [
      "Biomecánica",
      "Optativa I",
      "Electrónica Digital y Sistemas Embebidos",
      "Bioinstrumentación",
      "Estadística General",
    ],
  },
  {
    semestre: 8,
    ramos: [
      "Procesamiento de Señales Biomédicas",
      "Optativa II",
      "Ciencia, Tecnología y Sociedad",
      "Legislación en Salud",
      "Metrología Biomédica",
      "Ingeniería de Rehabilitación",
    ],
  },
  {
    semestre: 9,
    ramos: [
      "Imágenes Médicas",
      "Optativa III",
      "Equipos Biomédicos I",
      "Ingeniería Clínica",
      "Seminario de Investigación",
      "Electiva I",
    ],
  },
  {
    semestre: 10,
    ramos: [
      "Electiva II",
      "Trabajo de Grado – Programa Profesional",
      "Proyectos i+D+I",
      "Fundamentación Ambiental",
      "Equipos Biomédicos II",
      "Gestión de Tecnología en Salud",
    ],
  },
];
// Activar modo oscuro/claro
const toggleBtn = document.getElementById("toggle-dark");
const isDark = localStorage.getItem("modoOscuro") === "true";

if (isDark) {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkActive = document.body.classList.contains("dark");
  localStorage.setItem("modoOscuro", darkActive);
});
