import React from "react";
import Header from "../template/Header";
import { ApiUrl } from '../services/Apires';
import axios from "axios";

class Nuevo extends React.Component {
   
   
    constructor(props) {
      super(props);
      this.Id_Placa = React.createRef(); 
      this.Placa = React.createRef(); 
      this.Tipo_Vehiculo = React.createRef(); 
      this.Nombre = React.createRef();  
      this.Cedula = React.createRef(); 
      this.Telefono = React.createRef(); 
      this.Correo = React.createRef(); 
      this.Sede = React.createRef(); 
      this.Hora_Entrada = React.createRef(); 
      this.Hora_Salida = React.createRef(); 
      this.id_Detalle = React.createRef(); 
      this.Id_Usuario = React.createRef(); 
      this.Sexo = React.createRef(); 
      this.Direccion = React.createRef(); 
       
     }
  

  async enviadorsubmit (){
  let state = {

    form: {
      "Id_Placa": this.Id_Placa.current.value,
      "Placa": this.Placa.current.value,
      "Tipo_Vehiculo": this.Tipo_Vehiculo.current.value,
      "Nombre": this.Nombre.current.value,
      "Cedula": this.Cedula.current.value,
      "Telefono": this.Telefono.current.value,
      "Correo": this.Correo.current.value,
      "Sede":this.Sede.current.value,
      "Hora_Entrada":this.Hora_Entrada.current.value,
      "Hora_Salida":this.Hora_Salida.current.value,
      "id_Detalle":this.id_Detalle.current.value,
      "Id_Usuario":this.Id_Usuario.current.value,
      "Sexo":this.Sexo.current.value,
      "Direccion":this.Direccion.current.value
    },
 
  }

  console.log(state);

 let url = ApiUrl + "AddVehiculo "
  await axios.post(url,state)
  .then(Response => {
    this.setState({
     
    })

    window.location.replace("/Tablas");   
    console.log(Response)
  })
 
 }


  manejadorSubmit = e => {
    e.preventDefault

  }
  // / 
  
  render() {
    
    return (
      <React.Fragment>

        <Header></Header>
        <div className="container">
          <h1 >INGRESAR VEHICULO</h1>
        </div>
        <div className="container">
          <br />
          <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
          <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Placa</label>
                <div className="col-md-10">
                  <input className="form-control " name="Placaid" placeholder="Placaid" type="text"   ref={this.Id_Placa} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Placa</label>
                <div className="col-md-10">
                  <input className="form-control " name="Placa" placeholder="Placa" type="text" ref={this.Placa} />
                </div>
              </div>
            </div>
             <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Tipo vehiculo</label>
                <div className="col-md-10">
                  <input className="form-control " name="Tipo Vehiculo" placeholder="Tipo Vehiculo" type="text" ref={this.Tipo_Vehiculo} />
                </div>
              </div>
            </div> 
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Telefono</label>
                <div className="col-md-10">
                  <input className="form-control " name="Telefono" placeholder="Telefono" type="text" ref={this.Telefono} />
                </div>
              </div>
            </div> 
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Nombre</label>
                <div className="col-md-10">
                  <input className="form-control " name="Nombre" placeholder="Nombre" type="Nombre" ref={this.Nombre} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Cedula</label>
                <div className="col-md-10">
                  <input className="form-control " name="Cedula" placeholder="Cedula" type="text" ref={this.Cedula} />
                </div>
              </div>
            </div>  
             <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Correo</label>
                <div className="col-md-10">
                  <input className="form-control " name="Correo" placeholder="Correo" type="email" ref={this.Correo} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Sede</label>
                <div className="col-md-10">
                  <input className="form-control " name="Sede" placeholder="Sede" type="text" ref={this.Sede} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Hora Entrada</label>
                <div className="col-md-10">
                  <input className="form-control " name="Hora Entrada" placeholder="Hora Entrada" type="time" ref={this.Hora_Entrada} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Hora Salida"</label>
                <div className="col-md-10">
                  <input className="form-control " name="Hora Salida" placeholder="Hora Salida" type="time" ref={this.Hora_Salida} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Detalle</label>
                <div className="col-md-10">
                  <input className="form-control " name="Detalle" placeholder="Detalle" type="text" ref={this.id_Detalle} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Cedula Confirme</label>
                <div className="col-md-10">
                  <input className="form-control " name="Cedula Confirme" placeholder="Cedula Confirme" type="text" ref={this.Id_Usuario}/>
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Sexo</label>
                <div className="col-md-10">
                  <input className="form-control " name="Sexo" placeholder="Sexo" type="text" ref={this.Sexo} />
                </div>
              </div>
            </div> <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Direccion</label>
                <div className="col-md-10">
                  <input className="form-control " name="Direccion" placeholder="Direccion" type="text" ref={this.Direccion} />
                </div>
              </div>
            </div>
            <br></br>
            <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={this.enviadorsubmit} >Crear</button>
             <a className="btn btn-dark " href="/Tablas">Salir</a>
          </form>
        </div>
      </React.Fragment>
    )

  }

}

export default Nuevo