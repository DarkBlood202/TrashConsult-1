import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashnavbar from './Dashnavbar';
import Dashtopbar from './Dashtopbar';

import Dashinicio from './Dashinicio';
import Dashpreguntas from './Dashpreguntas';
import Dashreportes from './Dashreportes';
import Dashsesiones from './Dashsesiones';
import Dashusuarios from './Dashusuarios';

export class DashView extends Component {
    render() {
        return (
            <div id="wrapper">
                <Dashnavbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Dashtopbar />
                        <Router>
                            <Switch>
                                <Route exact path='/administracion/' component={Dashinicio} />
                                <Route path='/administracion/usuarios' component={Dashusuarios} />
                                <Route path='/administracion/preguntas' component={Dashpreguntas} />
                                <Route path='/administracion/reportes' component={Dashreportes} />
                                <Route path='/administracion/sesiones' component={Dashsesiones} />
                            </Switch>
                        </Router>
                    </div>
                    <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © Trash Consult 2021. Todos los derechos reservados.</span>
                        </div>
                    </div>
                </footer>
                </div>
            </div>
        )
    }
}

export default DashView;

ReactDOM.render(<DashView />, document.getElementById('admin-app'))
