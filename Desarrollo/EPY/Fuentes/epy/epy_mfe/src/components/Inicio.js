import axios from 'axios';
import React, { Component } from 'react';
// import axios from 'axios';
import Pregunta from './Pregunta';
import PreguntaNueva from './PreguntaNueva';

export class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas: []
        };
        this.obtenerPreguntas();
    }

    obtenerPreguntas() {
        axios.get('/api/preguntas')
            .then(res => {
                this.setState({
                    preguntas: res.data
                });
            });
    }

    render() {
        return (
            <div className="row m-0 vh-10 align-items-center justify-content-center">
                <div className="card bg-light col-md-11 mb-auto p-5 text-center" style={{ margin: '3%', borderRadius: '15px' }} >
                    <div className="cards">
                        <PreguntaNueva />
                        {this.state.preguntas.map(pregunta => {
                            return (
                                <Pregunta key={pregunta.url} pregunta={pregunta} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio;
