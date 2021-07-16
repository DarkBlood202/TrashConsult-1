import React, { Component } from 'react'

import Pregunta from './Pregunta';

export class MisPreguntas extends Component {
    render() {
        return (
            <div className="row m-0 vh-10 align-items-center justify-content-center">
                <div className="card bg-light col-md-11 mb-auto p-5 text-center" style={{ margin: '3%', borderRadius: '15px' }} >
                    <ul className="cards">
                        <Pregunta />
                        <Pregunta />
                        <Pregunta />
                    </ul>
                </div>
            </div>
        )
    }
}

export default MisPreguntas;
