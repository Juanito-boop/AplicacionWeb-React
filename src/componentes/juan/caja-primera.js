// import react from 'react'

function CajaPrimera() {
    return(
        <div class="caja-primera" id="caja-primera">
            <p><b>CARGA DE PRODUCTOS</b></p>
            <div class="botones" id="botones">
                <button class="boton-subir-archivo" id="boton-subir-archivo">
                    <input type="file" name="fileupload" id="fileupload" />
                </button>
                <button class="boton-publicar" id="boton-publicar">
                    <input type="submit" value="Upload csv" name="submit" onclick="cargarArchivo()" />
                </button>
            </div>
            <script src="./srcipts.js"></script>
        </div>
    )
}
export default CajaPrimera;