import React, { Component } from 'react';
import axios from 'axios';

import PersonTarget from './Chat/PersonTarget';

export class Chats extends Component {
    constructor(props){
        super(props);
        this.state = {
            sesiones: [],
            usuario: {},
        };
        this.obtenerUsuario();
        this.obtenerSesiones();
    }

    obtenerUsuario(){
        axios.get('/api/obtener-usuario/')
            .then(res => {
                this.setState({
                    usuario: res.data
                });
                console.log(this.state.usuario.id);
            });
    }

    obtenerDataUsuario(id){
        axios.get(`/api/usuarios/${id}`)
            .then(res => {
                return res.data;
            });
    }

    obtenerSesiones(){
        axios.get('/api/crear-sesion/')
            .then(res => {
                let totalSesiones = [];
                totalSesiones = res.data;
                totalSesiones.filter(sesion => {
                    return sesion.participantes.includes(this.state.usuario.id)
                });
                console.log(totalSesiones);

                this.setState({
                    sesiones: totalSesiones,
                });
            });
    }

    render() {
        return (
            <div>
                {/* Content wrapper start */}
                <div className="content-wrapper my-4">
                    {/* Row start */}
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card m-0">
                                {/* Row start */}
                                <div className="row no-gutters">
                                    <div>
                                        <div className="users-container">
                                            <ul className="users mx-4">
                                                {this.state.sesiones.map(sesion => {
                                                    return (
                                                        <PersonTarget
                                                            key={sesion.id}
                                                            id={sesion.id}
                                                            name={sesion.asunto}
                                                            time={sesion.participantes.map(p => `${p.first_name} ${p.last_name}`).join(' y ')}
                                                            sessionKey={sesion.id_key}
                                                            img="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                            status="status busy"
                                                            nuevo={sesion.nuevo}
                                                        />
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Row end */}
                            </div>
                        </div>
                    </div>
                    {/* Row end */}
                </div>
                {/* Content wrapper end */}
            </div>
        )
    }
}


export default Chats;
