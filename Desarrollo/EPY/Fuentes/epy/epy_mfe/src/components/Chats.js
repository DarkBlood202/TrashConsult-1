import React, { Component } from 'react'

import PersonTarget from './Chat/PersonTarget';

export class Chats extends Component {
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
                                                <PersonTarget
                                                    name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                    status="status busy"
                                                    dataperson="person1" />
                                                <PersonTarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                                                    status="status offline"
                                                    dataperson="person2" />
                                                <PersonTarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                                                    status="status away"
                                                    dataperson="person3" />
                                                <PersonTarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                    status="status busy"
                                                    dataperson="person4" />
                                                <PersonTarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                                                    status="status offline"
                                                    dataperson="person5" />
                                                <PersonTarget name="Steve Bangalter" time="15/02/2019"
                                                    img="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                                                    status="status away"
                                                    dataperson="person6" />
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
