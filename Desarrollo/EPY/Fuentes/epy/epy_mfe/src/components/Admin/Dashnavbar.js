import React, { Component } from 'react';


export class Dashnavbar extends Component {

    render() {
        return (
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-user-graduate" />
                    </div>
                    <div className="sidebar-brand-text mx-3">EDUPY</div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="/administracion">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Interface
                </div>
                {/* Nav Item - Usuarios */}
                <li className="nav-item">
                    <a className="nav-link" href="/administracion/usuarios">
                        <i className="fas fa-fw fa-user" />
                        <span>Usuarios</span></a>
                </li>
                {/* Nav Item - Preguntas */}
                <li className="nav-item">
                    <a className="nav-link" href="/administracion/preguntas">
                        <i className="fas fa-fw fa-question" />
                        <span>Preguntas</span></a>
                </li>
                {/* Nav Item - Sesiones */}
                <li className="nav-item">
                    <a className="nav-link" href="/administracion/sesiones">
                        <i className="fas fa-fw fa-comments-dollar" />
                        <span>Sesiones</span></a>
                </li>
                {/* Nav Item - Reportes */}
                <li className="nav-item">
                    <a className="nav-link" href="/administracion/reportes">
                        <i className="fas fa-fw fa-bug" />
                        <span>Reportes</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <a href="/" className="btn btn-secondary btn-circle">
                        <i className="fas fa-fw fa-sign-out-alt"/>
                    </a>
                </div>

            </ul>

        )
    }
}

export default Dashnavbar;
