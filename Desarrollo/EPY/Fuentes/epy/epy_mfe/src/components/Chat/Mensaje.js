import React, { Component } from 'react'

export class Mensaje extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let timestamp = new Date().toLocaleTimeString();

        return (
            <li className={this.props.propio ? "chat-right" : "chat-left"}>
                {/* <div className={this.props.propio ? "chat-hour" : "d-none"}>{timestamp}</div> */}
                {/* <div className="chat-avatar">
                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                    <div className="chat-name">{this.props.usuario.first_name}</div>
                </div> */}
                <div className="chat-text">
                    {this.props.mensaje}
                </div>
                {/* <div className={this.props.propio ? "d-none" : "chat-hour"}>{timestamp}</div> */}
            </li>
        )
    }
}

export default Mensaje;
