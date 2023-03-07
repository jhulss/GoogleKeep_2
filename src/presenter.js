import mostrar_lista_notas from "./mostrar_lista_notas";
import verificar_formulario from "./verificar_formulario";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#nota-form");
const div_notas = document.querySelector(".div_notas");
const ul = document.querySelector('ul');
const div_busqueda = document.querySelector("#resultado_busqueda_div");
const form_busqueda = document.querySelector("#buscador-form");
const buscar = document.querySelector("#buscar");

const titulo_obligatorio = document.querySelector("#h3_titulo");

let notas = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const li = document.createElement("li");
  // const p = document.createElement("p");

  if(verificar_formulario(titulo.value, titulo_obligatorio)){
    return;
  }

  const objNota = {
    id: Date.now(),
    titulo:titulo.value,
    descripcion: descripcion.value,
  }
  notas = [...notas,objNota];

  form.reset();
  mostrar_lista_notas(notas, div_notas);
  // p.innerHTML = "<p>" + "<strong>" + titulo.value + "</strong>" + "<br>"+ descripcion.value +"</p>";
  
  // li.appendChild(p);
  // ul.appendChild(li);
});

form_busqueda.addEventListener("submit", (event) => {
  event.preventDefault();
  div_busqueda.innerHTML = "<p>" + LN.get(buscar.value) + "</p>";
});