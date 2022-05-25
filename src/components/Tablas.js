import React from "react";
import Header from "../template/Header";
import { ApiUrl } from '../services/Apires';
import axios from "axios";
 
class Tablas extends React.Component {
 
    
  state = {
    vehiculos: []

  }

  clickvehiculo(id) {
    window.location.replace("/Editar"+"/"+id);   

 
   }



  componentDidMount() {
    let url = ApiUrl + "Listvehiculo"
    axios.get(url)
      .then(Response => {
        this.setState({
          vehiculos: Response.data.vehiculo
        })
        console.log(Response)
      })


  }
  
  render() {
  
    return (
   
      <React.Fragment>

        <Header></Header>
        <br></br>
          <br></br>
           <br></br>
          <br></br>
        <div className="container  ">  
          <a className="btn btn-primary " href="/Nuevo">Ingresar Nuevo Vehiculo</a>
          <a className="btn btn-dark " href="/">Salir</a>

        </div>
        <div className="container  ">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <table className="table table-hover col-sm-6 bg-white center " >
            <thead>
              <tr>
                  <th scope="col ">ID</th>
                  <th scope="col ">Placa</th>
                  <th scope="col ">Propietario</th>
                  <th scope="col ">Tipo De Vehiculo</th>
                  <th scope="col ">Hora De Entrada</th>
                  <th scope="col ">Hora De Salida</th>
                </tr>
              </thead>
              <tbody>
                { !this.state.vehiculos ? <>Cargando</>:
                
                this.state.vehiculos.map((value, index) => {
                  return (
                    <tr key={index} onClick={() => this.clickvehiculo(value.id_vehiculo)}>
                    <td>{value.id_vehiculo}</td>
                    <td>{value.placa}</td>
                    <td>{value.nombre}</td>
                    <td>{value.tipo_vehiculo}</td>
                    <td>{value.hora_entrada} </td>
                    <td>{value.hora_salida} </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
 
      </React.Fragment>



    )

  }

}

export default Tablas