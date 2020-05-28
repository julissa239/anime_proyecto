import React from "react";



const Card : React.FC= ({}) => (
    <section className="message-area">
        <div className= "row mt-5" >
            <div className= "card">
                <div className="card-header bg-dark text-center text-white">
                
                 <h2>Formulario para la inserccion de un Anime nuevo y vista de Episodios</h2>

                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <form>
                                <div className="form-group">
                                    <input
                                     type="text"
                                     name="NombreUsuario"
                                     className="form-control"
                                     autoFocus
                                     placeholder="Digite Nombre Usuario"></input>
                                    
                          


                                </div>
                                <div className="form-group">
                                    <input
                                     type="password"
                                     name="claveUsuario"
                                     placeholder="Digite la Contraseña"
                                     className="form-control"></input>
                                     
                                </div>
                                <div className="form-group">
                                    <input
                                     type="date"
                                     name="Fechacreacion"
                                     id="Fechacreacion"
                                     className="form-control"></input>
                                     
                                </div>
                                <div className="form-group">
                                    
                                     
                                     <input
                                       type="email"
                                       name="correo"
                                       placeholder="Digite correo"
                                       className="form-control"></input>
                                       
                                </div>
                                <div className="form-group">
                                <select name="generoAnime" id="generoAnime" className="form-control">
                                 <option value="">Seleccione el genero del anime</option>
                                 <option value="1">Accion</option>
                                 <option value="2">Romantico</option>
                                 <option value="3">Ovas</option>
                                </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-outline-success btn-block" value="Insertar Anime"></input>

                                    
                                    
                                </div>
                                   
                            </form>
                        </div>
                        <div className="col-lg-9 col-sm-12">
                        <table className="table table-hover table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>Nombre Anime</th>
                                    <th>Autor</th>
                                    <th>Fecha Creacion</th>
                                    <th>Temporadas</th>
                                    <th>Episodios</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        One Pace

                                    </td>
                                    <td>
                                        Akira Toriyama
                                    </td>
                                    <td>
                                        12/12/12
                                    </td>
                                    <td>
                                        20
                                    </td>
                                    <td>
                                        <a href="./episodios.html" className="btn btn-outline-info">Ver Episodios</a>

                                    </td>
                                    <td>
                                        <input type="button" className="btn btn-primary" value="Editar Anime"></input>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" className="btn btn-danger" value="Eliminar Anime"></input>
                                    </td>
                                    

                                </tr>
                            
                            </tbody>
                        </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    </section>
)
export default Card;