import React, { Component } from 'react'

const Persontarget = props => {

    return (
        <li className="person" data-chat={props.dataperson}>
            <div className="user">
                <img src={props.img} alt="Retail Admin" />
                <span className={props.status} />
            </div>
            <p className="name-time">
                <span className="name">{props.name}</span>
                <span className="time">{props.time}</span>
            </p>
        </li>
    )


}


export class Chat extends Component {
    render() {
        return (

            <div>
                {/* Page header start */}
                <div className="page-title">
                    <div className="row gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <h5 className="title">Chat App</h5>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
                    </div>
                </div>
                {/* Page header end */}
                {/* Content wrapper start */}
                <div className="content-wrapper">
                    {/* Row start */}
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card m-0">
                                {/* Row start */}
                                <div className="row no-gutters">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                        <div className="users-container">
                                            <div className="chat-search-box">
                                                <div className="input-group">
                                                    <input className="form-control" placeholder="Buscar" />
                                                    <div className="input-group-btn">
                                                        <button type="button" className="btn btn-info">
                                                            <i className="fa fa-search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="users">
                                                <Persontarget
                                                    name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                    status="status busy"
                                                    dataperson="person1" />
                                                <Persontarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                                                    status="status offline"
                                                    dataperson="person2" />
                                                <Persontarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                                                    status="status away"
                                                    dataperson="person3" />
                                                <Persontarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                    status="status busy"
                                                    dataperson="person4" />
                                                <Persontarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                                                    status="status offline"
                                                    dataperson="person5" />
                                                <Persontarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                                                    status="status away"
                                                    dataperson="person6" />

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                        <div className="selected-user">
                                            <span>To: <span className="name">Emily Russell</span></span>
                                        </div>
                                        <div className="chat-container">
                                            <ul className="chat-box chatContainerScroll">
                                                <li className="chat-left">
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        <div className="chat-name">Russell</div>
                                                    </div>
                                                    <div className="chat-text">Hello, I'm Russell.
                                                        <br />How can I help you today?
                                                    </div>
                                                    <div className="chat-hour">08:55  </div>
                                                </li>
                                                <li className="chat-right">
                                                    <div className="chat-hour">08:56  </div>
                                                    <div className="chat-text">Hi, Russell
                                                        <br /> I need more information about Developer Plan.
                                                    </div>
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        <div className="chat-name">Sam</div>
                                                    </div>
                                                </li>
                                                <li className="chat-left">
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        <div className="chat-name">Russell</div>
                                                    </div>
                                                    <div className="chat-text">Are we meeting today?
                                                        <br />Project has been already finished and I have results to show you.
                                                    </div>
                                                    <div className="chat-hour">08:57  </div>
                                                </li>
                                                <li className="chat-right">
                                                    <div className="chat-hour">08:59  </div>
                                                    <div className="chat-text">Well I am not sure.
                                                        <br />I have results to show you.
                                                    </div>
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin" />
                                                        <div className="chat-name">Joyse</div>
                                                    </div>
                                                </li>
                                                <li className="chat-left">
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        <div className="chat-name">Russell</div>
                                                    </div>
                                                    <div className="chat-text">The rest of the team is not here yet.
                                                        <br />Maybe in an hour or so?
                                                    </div>
                                                    <div className="chat-hour">08:57  </div>
                                                </li>
                                                <li className="chat-right">
                                                    <div className="chat-hour">08:59  </div>
                                                    <div className="chat-text">Have you faced any problems at the last phase of the
                                                        project?</div>
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="Retail Admin" />
                                                        <div className="chat-name">Jin</div>
                                                    </div>
                                                </li>
                                                <li className="chat-left">
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        <div className="chat-name">Russell</div>
                                                    </div>
                                                    <div className="chat-text">Actually everything was fine.
                                                        <br />I'm very excited to show this to our team.
                                                    </div>
                                                    <div className="chat-hour">07:00  </div>
                                                </li>
                                            </ul>
                                            <form action="#" className="bg-light">
                                                <div className="input-group">
                                                    <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                                                    <div className="input-group-append">
                                                        <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane" /></button>
                                                    </div>
                                                </div>
                                            </form>

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


export default Chat;
