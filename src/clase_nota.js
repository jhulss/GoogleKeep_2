class Notas{
    constructor(){
        this.nota = [];
    }
    validarNota(e) {
        e.preventDefault();

        const titulo = document.querySelector("#titulo").value;
        const descripcion = document.querySelector("#descripcion").value;

        if (titulo.trim().length === 0) {
            console.log('No tiene titulo')
            return
        }
        
        const objNota = {
            id: Date.now(),
            titulo:titulo,
            descripcion:descripcion,
        }

        this.nota = [...this.nota,objNota];
        
    }
}
export default Notas;