import React, { Component } from 'react'

export class Mensaje extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let timestamp = new Date(this.props.timestamp).toLocaleTimeString();

        let bubble;

        if(this.props.propio){
            bubble = (
                <li className="chat-right">
                    <div className="chat-hour">{timestamp}</div>
                    <div className="chat-text">{this.props.mensaje}</div>
                    <img src={this.props.adjunto} style={{width: '320px'}}/>
                    <a href={this.props.adjunto} target="_blank"></a>
                    <div className="chat-avatar">
                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                        <div className="chat-name">Tú</div>
                    </div>
                </li>
            );
        } else {
            bubble = (
                <li className="chat-left">
                    <div className="chat-avatar">
                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                        <div className="chat-name">{this.props.autor.first_name}</div>
                    </div>
                    <div className="chat-text">{this.props.mensaje}</div>
                    <img src={this.props.adjunto} style={{width: '320px'}}/>
                    <a href={this.props.adjunto} target="_blank"></a>
                    <div className="chat-hour">{timestamp}</div>
                </li>
            );
        }

        return bubble;
    }
}

export default Mensaje;
