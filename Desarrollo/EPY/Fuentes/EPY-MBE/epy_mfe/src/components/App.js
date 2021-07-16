import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import NavBar from './NavBar';
import Login from './Login';
import Perfil from './Perfil';
import Inicio from './Inicio';
import SobreNosotros from './SobreNosotros';
import MisPreguntas from './MisPreguntas';
import Ayuda from './Ayuda';
import EditarPerfil from './EditarPerfil';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/perfil' component={Perfil} />
                    <Route path='/inicio' component={Inicio} />
                    <Route path='/sobre-nosotros' component={SobreNosotros} />
                    <Route path='/mis-preguntas' component={MisPreguntas} />
                    <Route path='/ayuda' component={Ayuda} />
                    <Route path='/editar-perfil' component={EditarPerfil} />
                </Switch>
            </Router>
        )
    }
}

export default App;


// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             loaded: false,
//             placeholder: "Cargando..."
//         };
//     }

//     componentDidMount() {
//         fetch('api/preguntas')
//             .then(res => {
//                 if (res.status > 400) {
//                     return this.setState(() => {
//                         return {
//                             placeholder: `Something went wrong! ${res.statusText}`
//                         }
//                     });
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 this.setState(() => {
//                     return {
//                         data,
//                         loaded: true
//                     };
//                 });
//             });
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.data.map(pregunta => {
//                     return (
//                         <li key={pregunta.id}>
//                             {pregunta.titulo} - {pregunta.descripcion}
//                         </li>
//                     );
//                 })}
//             </ul>
//         );
//     }
// }

// export default App;
// const container = document.getElementById('app');
// render(<App />, container);

// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<NavBar />, document.getElementById('barra-navegacion'));
ReactDOM.render(<App />, document.getElementById('app'));