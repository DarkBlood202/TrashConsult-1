import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import NavBar from './NavBar';
import Registro from './Registro';
import Login from './Login';
import Perfil from './Perfil';
import Inicio from './Inicio';
import SobreNosotros from './SobreNosotros';
import MisPreguntas from './MisPreguntas';
import Ayuda from './Ayuda';
import Chats from './Chats';
import ChatRoom from './ChatRoom';
import Busqueda from './Busqueda';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/registro' component={Registro} />
                    <Route path='/perfil' component={Perfil} />
                    <Route path='/inicio' component={Inicio} />
                    <Route path='/sobre-nosotros' component={SobreNosotros} />
                    <Route path='/mis-preguntas' component={MisPreguntas} />
                    <Route path='/ayuda' component={Ayuda} />
                    <Route path='/chat' component={Chats} />
                    <Route path='/busqueda' component={Busqueda} />
                </Switch>
            </Router>
        )
    }
}

export default App;

ReactDOM.render(<NavBar />, document.getElementById('barra-navegacion'));
ReactDOM.render(<App />, document.getElementById('app'));