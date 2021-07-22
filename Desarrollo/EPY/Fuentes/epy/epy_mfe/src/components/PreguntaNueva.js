import axios from 'axios';
import Cookies from 'js-cookie';
import React, { Component } from 'react'
import CsrfToken from './CsrfToken';

var csrfCookie = Cookies.get('csrftoken')

export class PreguntaNueva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion: ''
        };
    }

    handleInput = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.titulo + this.state.descripcion);
        axios.post('/api/preguntas/', this.state, {
            headers: {
                'X-CSRFTOKEN': csrfCookie,
            }
        })
    }

    render() {
        // const { pregunta } = this.props;
        return (
            <li className="cards__item">
                <div className="cardPregunta ">
                    <div className="card__content">
                        <div className="card__title">Publicar nueva pregunta</div>
                        <form className="card__text" onSubmit={this.handleSubmit}>
                            <CsrfToken />
                            <input
                                type="text"
                                name="titulo"
                                placeholder="Título de la pregunta"
                                value={this.state.titulo}
                                onInput={this.handleInput}
                            />
                            <input
                                type="text"
                                name="descripcion"
                                placeholder="Descripción de la pregunta"
                                value={this.state.descripcion}
                                onInput={this.handleInput}
                            />
                            <input
                                type="submit"
                                className="btn"
                            />
                        </form>
                    </div>
                </div>
            </li>
        )
    }
}

export default PreguntaNueva;
