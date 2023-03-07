import mostrar_lista_notas from "./mostrar_lista_notas";
import verificar_formulario from "./verificar_formulario";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#nota-form");
const div_notas = document.querySelector(".div_notas");

const form_busqueda = document.querySelector("#buscador-form");
const div_busqueda = document.querySelector(".div_busquedas");
const buscar = document.querySelector("#buscar");

const titulo_obligatorio = document.querySelector("#h3_titulo");

let notas = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
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
});

div_notas.addEventListener("click", (e)=>{
  if (e.target.classList.contains('eliminar')){
    const notaID = Number(e.target.getAttribute("data-id"));
    const nuevasNotas = notas.filter((item) => item.id !== notaID);
    notas = nuevasNotas;
    mostrar_lista_notas(notas, div_notas)
}

});

form_busqueda.addEventListener("submit", (event) => {
  event.preventDefault();
  const buscarNota = notas.filter((item) => item.titulo === buscar.value);
  notas_encontradas = buscarNota;

  form_busqueda.reset();
  mostrar_lista_notas(notas_encontradas,div_busqueda);
  // div_busqueda.innerHTML = `<p>${buscar.value}</p>`;
});