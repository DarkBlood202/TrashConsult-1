import React, { Component } from 'react'

export class PersonTarget extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    seleccionarChat = (event) => {
        let room = new Uint8Array(length=16);
        window.crypto.getRandomValues(room);

        let room_name = room.join('');


        // console.log(room_name);
        // window.location.replace(`epychat/${room_name}/`);
        // window.open('https://buy.stripe.com/test_4gw5lPbrf7ve5iwcMM');
        // window.location.replace('https://buy.stripe.com/test_4gw5lPbrf7ve5iwcMM');
    }

    render() {
        return (
            <li
                className="person"
                data-chat={this.props.dataperson}
                onClick={this.seleccionarChat}
            >
                <div className="user">
                    <img src={this.props.img} alt="Retail Admin" />
                    <span className={this.props.status} />
                </div>
                <p className="name-time">
                    <span className="name">{this.props.name}</span>
                    {" - "}
                    <span className="time">{this.props.time}</span>
                </p>
            </li>
        )
    }
}

export default PersonTarget
