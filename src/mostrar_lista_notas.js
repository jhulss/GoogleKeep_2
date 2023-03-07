function mostrar_lista_notas(notas, div_notas) {

    div_notas.innerHTML = '';

    if (notas.length > 0) {
        notas.forEach((item) => {
            // console.log(item);
            const itemNota = document.createElement('div');
            itemNota.classList.add("item-nota");
            itemNota.innerHTML = `
            <p><strong>${item.titulo}:</strong>
                <br>${item.descripcion}
            </p>
            <div class="botones">
                <button class="eliminar" data-id="${item.id}">Eliminar</button>
            </div>
            `
            div_notas.appendChild(itemNota);
        })
    }else{
        const mensaje = document.createElement('p');
        mensaje.textContent = "Lista de notas vacia";
        div_notas.appendChild(mensaje);
    }

}

export default mostrar_lista_notas;