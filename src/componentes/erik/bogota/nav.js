import React from 'react'
import CargaProductos from '../../juan/carga-productos'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <a href={<CargaProductos />}> Productos </a>                       
                </li>
            </ul>
        </nav>
    )
}

export default Nav;