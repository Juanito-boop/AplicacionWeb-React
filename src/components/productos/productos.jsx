import React, { Component } from "react";
import "../Styles/global-styles.css";

export default class Productos extends Component {
  render() {
    return (
      <div className="producto-container">
        <div className="row">
          <div className="col-md-auto mx-auto">
            <p>
              <b className="titulo">CARGA DE PRODUCTOS</b>
            </p>
            <div className="botones">
              <button className="boton-subir-archivo">
                <input type="file" name="fileupload" />
              </button>
              <br></br>
              <button className="boton-publicar">
                <input type="submit" value="Upload csv" name="submit" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
