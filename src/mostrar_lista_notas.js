function mostrar_lista_notas(notas, div_notas) {
    
    div_notas.innerHTML = '';
    notas.forEach((item) => {
        // console.log(item);
        const itemNota = document.createElement('div');
        itemNota.classList.add("item-nota");
        itemNota.innerHTML = `
        <p><strong>${item.titulo}:</strong>
            <br>${item.descripcion}
        </p>
        `
        div_notas.appendChild(itemNota);
    })

}

export default mostrar_lista_notas;