function Article() {
    return(
        <article class="linea">
            <form name="formB" action="/LoQueSeaHTML/Servlet" method="post" onsubmit="return validaForm(this);">
                <input type="hidden" name="oculto" defaultValue="valorOculto" />
                <table>
                    <caption>
                        <h2>Acceso al Sistema</h2>
                    </caption>

                    <tbody>
                        <tr>
                            <td>
                                Usuario: (*)
                            </td>
                            <td>
                                <input className="default" type="text" name="usuario" placeHolder="Ingresa tu usuario" onfocus="this.select();" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Password: (*)
                            </td>
                            <td>
                                <input className="default" type="password" name="password" onfocus="this.select();" />
                            </td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>
                                <input type="submit" defaultValue="Aceptar" className="default" />
                            </td>
                            <td>
                                <input type="reset" defaultValue="Cancelar" className="default" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </article>
    )
}
export default Article;