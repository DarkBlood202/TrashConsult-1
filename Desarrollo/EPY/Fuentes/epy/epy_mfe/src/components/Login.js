import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-box">
                <img src="/static/epy_mfe/logo1.png" className="App-logo" alt="logo" />
                <h1>Login</h1>
                <form>
                    {/* USERNAME INPUT */}
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" name="username" placeholder="Ingrese Nombre de Usuario" />
                    {/* PASSWORD INPUT */}
                    <label htmlFor="password">Constraseña</label>
                    <input type="password" name="password" placeholder="Ingrese Contraseña" />
                    <input type="submit" className="btn" value="Ingresar" />
                    <a href="/">Olvidaste tu Contraseña?</a><br />
                    <a href="/">No tienes una cuenta?</a>
                </form>
            </div>
        )
    }
}

export default Login;
