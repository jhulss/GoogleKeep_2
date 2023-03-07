// import lista_notas from ".\lista_notas";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#nota-form");
const div = document.querySelector("#resultado_nota_div");
const ul = document.querySelector('ul');
const div_busqueda = document.querySelector("#resultado_busqueda_div");
const form_busqueda = document.querySelector("#buscador-form");
const buscar = document.querySelector("#buscar")

let LN = new Map();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  LN.set(titulo, descripcion);

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = "<p>" + "<strong>" + titulo.value + "</strong>" + "<br>"+ descripcion.value +"</p>";
  
  li.appendChild(p);
  ul.appendChild(li);
});

form_busqueda.addEventListener("submit", (event) => {
  event.preventDefault();
  div_busqueda.innerHTML = "<p>" + LN.get(buscar.value) + "</p>";
});