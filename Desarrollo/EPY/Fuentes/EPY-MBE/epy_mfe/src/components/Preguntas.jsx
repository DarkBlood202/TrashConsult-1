import React from 'react';
import '../css/index.css';

const Preguntas = () => (


    <li className="cards__item">
        <div className="cardPregunta ">
            <div className="card__content">
                <div className="card__title">PREGUNTA</div>
                <p className="card__text">Esta es una breve descripcion de tu conjetura y plantear la pregunta de manera adecuada dando el contexto necesario para que la pregunta encuentre sentido. </p>
                <button className="btnPregunta btn--block card__btn">Marcar Pregunta</button>
            </div>
        </div>
    </li>

)

export default Preguntas;