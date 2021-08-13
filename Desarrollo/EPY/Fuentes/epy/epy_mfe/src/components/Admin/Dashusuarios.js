import React, { Component } from 'react';

class Usuario extends Component {
  
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.tipo}</td>
                <td>{this.props.fecha}</td>
                <td>
                    <a href="/" className="btn btn-success btn-circle btn-sm">
                        <i className="fas fa-eye"></i>
                    </a>
                    <a href="/" className="btn btn-danger btn-circle btn-sm">
                        <i className="fas fa-trash"></i>
                    </a>
                </td>
            </tr>
        )
    }
};

export class Dashusuarios extends Component {

    render() {
        return (
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Usuarios</h1>
                <p className="mb-4">En la siguiente tabla se presenta una lista de todos los usuarios disponibles y se da la opcion a visualizar el perfil o eliminarlo.</p>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6 className="m-2 font-weight-bold text-primary">Usuarios</h6>
                            </div>
                            <div className="col-sm-12 col-md-6 d-flex">
                                <div className="ml-auto">
                                    <a href="productos.html" className="btn btn-success btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-plus"></i>
                                        </span>
                                        <span className="text">Nuevo Admin</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Usuario</th>
                                        <th>Tipo</th>
                                        <th>Fecha</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Usuario name="Usuario 1" fecha="10/06/2020" tipo="profesor" />
                                    <Usuario name="Usuario 2" fecha="10/06/2020" tipo="alumno" />
                                    <Usuario name="Usuario 3" fecha="10/05/2021" tipo="profesor" />
                                    <Usuario name="Usuario 4" fecha="10/08/2021" tipo="alumno" />
                                    <Usuario name="Usuario 5" fecha="10/05/2021" tipo="admin" />
                                    <Usuario name="Usuario 6" fecha="10/11/2021" tipo="profesor" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Dashusuarios;