function Article() {
    return (
        <article className="linea">
            <form name="formC" action="/LoQueSeaHTML/Servlet" method="post" onsubmit="return validaForm(this);">
                <input type="hidden" name="oculto" defaultValue="valorOculto" />
                <table>
                    <caption>
                        <h2>Acceso al Sistema</h2>
                    </caption>

                    <tbody>
                        <tr>
                            <td className="primerDato">
                                Usuario: (*)
                            </td>
                            <td>
                                <input className="default" type="text" name="usuario" placeHolder="Ingresa tu usuario" onfocus="this.select();" />
                            </td>
                        </tr>

                        <tr>
                            <td className="primerDato">
                                Password: (*)
                            </td>
                            <td>
                                <input className="default" type="password" name="password" defaultValue="Ingresa tu contraseña" onfocus="this.select();" />
                            </td>
                        </tr>
                        
                        <tr style={{ textAlign: 'center' }}>
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