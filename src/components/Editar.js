import React from "react";
import Header from "../template/Header";
import { ApiUrl } from '../services/Apires';
import axios from "axios";

class Editar extends React.Component {


  constructor(props) {
    super(props);
    this.Tipo_Vehiculo= React.createRef(); 
    this.Nombre= React.createRef(); 
    this.Telefono= React.createRef(); 
    this.Correo= React.createRef(); 
    this.Sexo= React.createRef(); 
    this.Direccion= React.createRef(); 
     
     


   }

  
  async enviadorsubmit (){
    let state = {
  
      form: {
        form: {
          "Tipo_Vehiculo":  this.Tipo_Vehiculo.current.value,
          "Nombre":  this.Nombre.current.value,
          "Telefono":  this.Telefono.current.value,
          "Correo":  this.Correo.current.value,
          "Sexo":  this.Sexo.current.value,
          "Direccion":  this.Direccion.current.value
        },
        error: false,
        errorMsg: ""
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



  add = () => {
    console.log(this.state.form)
    let url = ApiUrl + " ";
    axios.put(url, state)
      .then(Response => {

        console.log(Response)

      })
      window.location.replace("/Tablas");  
  }

  delete = () => {
    console.log(this.state.form)
    let url = ApiUrl + " ";
    axios.put(url,state)
      .then(Response => {

        console.log(Response)

      })
      window.location.replace("/Tablas");  
  }


  manejadorSubmit = e => {
    e.preventDefault
     
  }
   componentDidMount() {
     let url = ApiUrl + "Modificar/";  
    axios.put(url)
      .then(Response => {
        this.setState({
          from: {
            Tipo_Vehiculo: Response.data[0].Tipo_Vehiculo,
            Nombre: Response.data[0].Nombre,
            Telefono: Response.data[0].Telefono,
            Correo: Response.data[0].Correo,
            Sexo: Response.data[0].Sexo,
            Direccion: Response.data[0].Direccion,
          }

        })

      });

  }
  render() {
    
    return (
      <React.Fragment>

        <Header></Header>
        <div className="container">
          <h3>Editar Vehiculo</h3>
        </div>
        <div className="container">
          <br />
          <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Nombre</label>
                <div className="col-md-10">
                  <input className="form-control " name="Nombre" placeholder="Nombre" type="text" ref={this.Nombre} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Tipo De Vehiculo</label>
                <div className="col-md-10">
                  <input className="form-control " name="Tipo De Vehiculo" placeholder="Tipo De Vehiculo" type="text" ref={this.Tipo_De_Vehiculo} />
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
                <label className="col-md-2 control-label">Sexo</label>
                <div className="col-md-10">
                  <input className="form-control " name="Sexo" placeholder="Sexo" type="text" ref={this.Sexo} />
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
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Direccion</label>
                <div className="col-md-10">
                  <input className="form-control " name="Direccion" placeholder="Direccion" type="text" ref={this.Direccion} />
                </div>
              </div>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => this.add()} >Editar</button>
            <button type="submit" className="btn btn-danger" style={{ marginRight: "10px" }} onClick={() => this.delete() } >Eliminar</button>
            <a className="btn btn-dark " href="/Tablas">Salir</a>
          </form>
        </div>
      </React.Fragment>
    )

  }

}

export default Editar