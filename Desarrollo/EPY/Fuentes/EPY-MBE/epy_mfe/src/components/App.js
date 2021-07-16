import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Cargando..."
        };
    }

    componentDidMount(){
        fetch('api/preguntas')
            .then(res => {
                if(res.status > 400) {
                    return this.setState(() => {
                        return {
                            placeholder: `Something went wrong! ${res.statusText}`
                        }
                    });
                }
                return res.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render(){
        return(
            <ul>
                {this.state.data.map(pregunta => {
                    return (
                        <li key={pregunta.id}>
                            {pregunta.titulo} - {pregunta.descripcion}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

// export default App;
// const container = document.getElementById('app');
// render(<App />, container);

ReactDOM.render(<App />, document.getElementById('app'));