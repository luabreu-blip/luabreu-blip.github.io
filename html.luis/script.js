const carros = [
  { nombre: "Ferrari 488", marca: "ferrari", imagen: "img/Ferrari 488.avif" },
  { nombre: "Lamborghini Huracán", marca: "lamborghini", imagen: "img/Lamborghini-Huracan-EVO-Spyder_1_o.jpg" },
  { nombre: "Porsche 911 Turbo S", marca: "porsche", imagen: "C:\\Users\\jc297\\OneDrive\\Desktop\\html.luis\\img\\Porsche 911 Turbo S.webp" },
  { nombre: "Ferrari SF90", marca: "ferrari", imagen: "C:\\Users\\jc297\\OneDrive\\Desktop\\html.luis\\img\\Ferrari SF90.webp" },
  { nombre: "Lamborghini Aventador", marca: "lamborghini", imagen: "C:\\Users\\jc297\\OneDrive\\Desktop\\html.luis\\img\\Lamborghini Aventador.avif" },
  { nombre: "Porsche Taycan", marca: "porsche", imagen: "C:\\Users\\jc297\\OneDrive\\Desktop\\html.luis\\img\\Porsche Taycan.png" }
];

const container = document.getElementById("carros-container");
const btnsFiltro = document.querySelectorAll(".filter-btn");
const inputBuscar = document.getElementById("buscar");
const btnBuscar = document.getElementById("btnBuscar");

function mostrarCarros(lista) {
  container.innerHTML = "";
  lista.forEach(carro => {
    const div = document.createElement("div");
    div.classList.add("carro");
    div.innerHTML = `
      <img src="${carro.imagen}" alt="${carro.nombre}">
      <h3>${carro.nombre}</h3>
      <p>${carro.marca.toUpperCase()}</p>
    `;
    container.appendChild(div);
  });
}

mostrarCarros(carros);

// Filtros
btnsFiltro.forEach(btn => {
  btn.addEventListener("click", () => {
    const filtro = btn.getAttribute("data-filter");
    if (filtro === "todos") mostrarCarros(carros);
    else mostrarCarros(carros.filter(c => c.marca === filtro));
  });
});

// Buscador
btnBuscar.addEventListener("click", () => {
  const texto = inputBuscar.value.toLowerCase();
  const resultado = carros.filter(c => c.nombre.toLowerCase().includes(texto));
  mostrarCarros(resultado);
});

// Formulario (solo alerta de ejemplo)
document.getElementById("form-contacto").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensaje enviado con éxito 🚗💨");
  e.target.reset();
});
