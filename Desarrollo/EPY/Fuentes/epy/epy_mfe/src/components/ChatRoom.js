import React, { Component } from 'react';

import Mensaje from './Chat/Mensaje';

export class ChatRoom extends Component {
    render() {
        return (
            <div className="card my-4">
                <div className="selected-user">
                    <span className="name">Emily Russell</span>
                </div>
                <div className="chat-container">
                    <ul className="chat-box chatContainerScroll" style={{ minHeight: '350px', }}>
                        <li className="text-center">Has iniciado una sesión con Emily Russell</li>
                        <Mensaje
                            mensaje="I'm nicky minaj"
                            propio={true}
                        />
                        <Mensaje
                            mensaje="Yeh bby"
                            propio={true}
                        />
                        <Mensaje
                            mensaje="No ur not fkn btch"
                            propio={false}
                        />
                        <Mensaje
                            mensaje="U more like cardi b"
                            propio={false}
                        />
                        <Mensaje
                            mensaje="nooooo"
                            propio={true}
                        />
                    </ul>
                    <hr />
                    <form className="bg-light">
                        <div className="input-group">
                            <input type="text" placeholder="Escribir mensaje" className="form-control rounded-0 border-0 py-2 bg-light" />
                            <div className="input-group-append">
                                <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatRoom
