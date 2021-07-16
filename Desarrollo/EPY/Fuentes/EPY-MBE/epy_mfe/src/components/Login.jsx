import React from 'react';
import logo from '../img/logo1.png';
import '../css/index.css';

const Login = () => (

    <div className="login-box">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Login Here</h1>
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

export default Login;
