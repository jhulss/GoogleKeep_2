function verificar_formulario(titulo, titulo_obligatorio) {
    let resp = false;
    if (!titulo.trim()) {
        titulo_obligatorio.textContent = 'Titulo Obligatorio';

        setTimeout(() => {
            titulo_obligatorio.textContent = '';
        }, 2000)
        resp = true;
    }
    return resp;
}

export default verificar_formulario;