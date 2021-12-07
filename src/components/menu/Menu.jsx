import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { menuTelefonos } from "./menu-telefonos";

import Producto from "../productos/productos";
import Cliente from "../clientes/clientes";
import Venta from "../ventas/ventas";
import Reporte from "../reportes/reportes";
import Consolidado from "../consolidado/consolidado";
import Login from "../login/login";
// eslint-disable-next-line
// import mod from "./boton.js";

import "./Navbar.css";

export default class Menu extends Component {
  render() {
    function Black() {
      // document.getElementById('navBar').classList.remove('navBar');
      // document.getElementById('navBar').classList.add('active');
      document.getElementById('navBar').classList.toggle('active');
    }
    function menu() {
      document.getElementById('toogleButton').onClick = function () {
        Black();
      }
    }
    // function mod() {
    //   const [isOpen, setIsOpen] = useState(false)
    //   function onClickButton() {
    //     setIsOpen(!isOpen);
    //   }
    // }
    return (
      <><Router>
        <div className="vertical-menu">
          <button id="toogleButton" aria-label="Abrir menú" onClick={menu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/*<ul id="active">*/}
          <ul id="navBar">
            <li>
              <NavLink to="/login" className="" activeclass="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/producto" className="" activeclass="active">
                Producto
              </NavLink>
            </li>
            <li>
              <NavLink to="/cliente" className="" activeclass="active">
                Cliente
              </NavLink>
            </li>
            <li>
              <NavLink to="/venta" className="" activeclass="active">
                Venta
              </NavLink>
            </li>
            <li>
              <NavLink to="/reporte" className="" activeclass="active">
                Reporte
              </NavLink>
            </li>
            <li>
              <NavLink to="/consolidado" className="" activeclass="active">
                Consolidado
              </NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route
            exact
            path="/producto"
            caseSensitive={true}
            element={<Producto />} />
          <Route path="/cliente" caseSensitive={true} element={<Cliente />} />
          <Route exact path="/venta" caseSensitive={true} element={<Venta />} />
          <Route path="/reporte" caseSensitive={true} element={<Reporte />} />
          <Route
            path="/consolidado"
            caseSensitive={true}
            element={<Consolidado />} />
          <Route path="/login" caseSensitive={true} element={<Login />} />
        </Routes>
      </Router></>
    );
  }
}
