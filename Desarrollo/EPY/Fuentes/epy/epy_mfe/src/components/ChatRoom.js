import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Cookies from 'js-cookie';

import Mensaje from './Chat/Mensaje';
import ModalValoracion from './Valoracion/ModalValoracion';

var csrfCookie = Cookies.get('csrftoken')

export default function ChatRoom() {
    let params = useParams();

    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [sesion, setSesion] = useState([]);
    const [peer, setPeer] = useState([]);

    const [mensaje, setMensaje] = useState("");
    const [msgToggle, setMsgToggle] = useState(false);
    const [archivo, setArchivo] = useState(undefined);

    const [modalToggle, setModalToggle] = useState(false);

    var someFile = undefined;

    var modal = "";

    const obtenerMensajes = (sessionKey) => {
        axios.get('/api/mensajes')
            .then(res => {
                let mensajesRaw = res.data;
                // console.log(mensajesRaw);
    
                // Obtener mensajes de la sesion con ese id_key
                let mensajesFiltrados = mensajesRaw.filter(mensaje => {
                    return mensaje.sesion.id_key == sessionKey
                });
    
                setData(mensajesFiltrados);
            });
    }

    const obtenerSesion = (sessionKey) => {
        axios.get('/api/crear-sesion')
            .then(res => {
                let sesionRaw = res.data;
                
                let sesionArr = sesionRaw.filter(sesion => {
                    return sesion.id_key == sessionKey
                });

                setSesion(sesionArr[0]);
            });
    }

    const obtenerPeer = (sessionKey) => {
        axios.get('/api/obtener-usuario')
            .then(res => {
                let us = res.data;

                axios.get('/api/crear-sesion')
                    .then(resp => {
                        let raw = resp.data;
                        let ses = raw.filter(s => s.id_key == sessionKey)[0];

                        let sPeer = ses.participantes.filter(p => p.id != us.id)[0];

                        setPeer(sPeer);
                    })
            })
    }

    const obtenerUsuario = () => {
        axios.get('/api/obtener-usuario')
            .then(res => {
                // console.log(res.data);
                setUser(res.data);
            })
    }

    const handleInput = (event) => {
        setMensaje(event.target.value);
    }

    const handleFile = (event) => {
        if(event.loaded == event.total){
            console.log(someFile);
            someFile = event.target.files;
            console.log(someFile);
            // setArchivo(event.target.files);
        }
    }

    const enviarMensaje = (event) => {
        event.preventDefault();

        if(mensaje.trim().length === 0){
            // console.log("no puedes enviar vacio")
            return;
        }

        // let mensajeData = new FormData();

        // mensajeData.append("contenido", mensaje);
        // mensajeData.append("sesion", sesion.id);
        // mensajeData.append("autor", user.id);
        // mensajeData.append("adjunto", someFile, someFile.name);

        // axios.post('/api/mensajes/', mensajeData, {
        //     headers: {
        //         'X-CSRFTOKEN': csrfCookie,
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(res => {
        //         setMensaje("");
        //         obtenerMensajes(params.id_key);
        //     })

        axios.post('/api/mensajes/', {
            "contenido": mensaje,
            "sesion": sesion.id,
            "autor": user.id,
            // "adjunto": someFile,
        },{
            headers: {
                'X-CSRFTOKEN': csrfCookie,
            }
        })
            .then(res => {
                // console.log(res);
                setMensaje("");

                obtenerMensajes(params.id_key);
            })
    }

    const actualizar = (ms) => {
        setInterval(function(){
            // console.log("Triggered");
            // document.addEventListener("visibilitychange", function(){
            //     if(document[this.hidden]){
            //         console.log("Nothing cuz page is not active");
            //     } else {
            //         console.log("Getting");
            //         obtenerMensajes(params.id_key);
            //     }
            // }, false);
            obtenerMensajes(params.id_key);
            // console.log("Actualizado!");
        }, ms)
    }

    const terminarSesion = () => {
        // mostrar modal de cierre
        // set terminada a true
        setModalToggle(true);
        axios.patch(`/api/crear-sesion/${sesion.id}/`, {
            "terminada": true
        }, {
            headers: {
                'X-CSRFTOKEN': csrfCookie,
            }
        }).then(res => {
            console.log(res);
            sesion.terminada = true;
        })

    }

    const toggleMsg = () => {
        let val = msgToggle;
        setMsgToggle(!val);
    }

    useEffect(()=>{
        obtenerUsuario();
        obtenerSesion(params.id_key);
        obtenerMensajes(params.id_key);
        obtenerPeer(params.id_key);
        actualizar(1000);
    }, []);


    let visibleComp;
    let formComponent;

    if(!msgToggle){
        formComponent = (
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Escribir mensaje"
                    className="form-control rounded-0 border-0 py-2 bg-light"
                    value={mensaje}
                    onInput={handleInput}
                    disabled={sesion.terminada}
                />
                {/* <input type="file" onChange={handleFile}/> */}
                <div className="input-group-append">
                    <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane" /></button>
                </div>
            </div>
        )
    } else {
        formComponent = (
            <div className="text-primary">Multimedia</div>
        )
    }

    if(modalToggle){
        visibleComp = (
            <ModalValoracion peer={peer} />
        )
    } else {
        visibleComp = (
            <div className="card my-4">
                <div className="row row-cols-2 p-4">
                    <div className="name col">Asunto: {sesion.asunto}</div>
                    <button className="col btn btn-link text-danger">Reportar...</button>
                </div>
                <div className="chat-container">
                    <ul className="chat-box chatContainerScroll" style={{ minHeight: '350px', }}>
                        <li className="text-center">Has iniciado una sesión con {`${peer.first_name} ${peer.last_name}`}</li>
                        {data.map(mensaje => (
                            <Mensaje
                                key={mensaje.id}
                                mensaje={mensaje.contenido}
                                // adjunto={mensaje.adjunto.archivo}
                                propio={mensaje.autor.id === user.id ? true : false}
                                timestamp={mensaje.timestamp}
                                autor={mensaje.autor}
                            />
                        ))}
                    </ul>
                    <hr />
                    <form onSubmit={enviarMensaje} className="bg-light">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={toggleMsg} className={`nav-link ${msgToggle ? "" : "active"}`}>Texto</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={toggleMsg} className={`nav-link ${msgToggle ? "active" : ""}`}>Multimedia</a>
                            </li>
                        </ul>
                        {formComponent}
                    </form>
                </div>
                <hr />
                {
                !sesion.terminada ?
                <button
                    className="btn btn-danger m-2"
                    onClick={terminarSesion}
                >
                    Terminar sesión
                </button>
                : 
                <h6 className="text-secondary text-center p-2">Sesión terminada</h6>
                }
            </div>
        )
    }

    return (
        <div>
            {visibleComp}
        </div>
    )
}
