import React, { Component } from 'react'

export class Pregunta extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { pregunta } = this.props;
        return (
            <li className="cards__item">
                <div className="cardPregunta ">
                    <div className="card__content">
                        <div className="card__title">{pregunta.titulo} {pregunta.editada ? "(editada)" : ""}</div>
                        <p className="card__text">{pregunta.descripcion}</p>
                        <p className="card__text">Publicado en {new Date(pregunta.fecha).toLocaleDateString()} a las {new Date(pregunta.fecha).toLocaleTimeString()} por {pregunta.autor}</p>
                        <button className="btnPregunta btn--block card__btn">Marcar Pregunta</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default Pregunta;
