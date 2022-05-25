import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';
import "../assets/css/Login.css"
import logo from "../assets/img/descarga.png";
import { ApiUrl } from '../services/Apires';
 
class Login extends React.Component {
 
     
   
    
   manejadorSubmit = e => {
      e.preventDefault();
   }

   state = {

      form: {
         "usuario": "",
         "contraseña": ""

      },
      
   }

   




   manejadorChange = async e => {
      await this.setState({

         form: {
            ...this.state.form,
            [e.target.name]: e.target.value

         }
      })
      console.log(this.state.form)

   }
   
   manejadorBoton = () => {
        let url = ApiUrl + "login/"+this.state.form.usuario+ "/"+this.state.form.contraseña
      axios.post(url, this.state.form)
         .then(Response => {
            console.log(Response)
            if (Response.data.status === "ok") {
                
               localStorage.setItem("token", Response.data.result.token);
  
               } else {
               
               this.setState({
                  error: true,
                  errorMsg: "Response.data.result.error_msg"
               })
               window.location.replace("/Tablas");
            }
         }).catch(error => {

            console.log(error)
           
            this.setState({
               error: true,
               errorMsg: "Error En Conexion Con APi"
            })

         })



   }
   render() {
      return (
         <React.Fragment> 
             
            <section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="Login"> 
               <div className="wrapper fadeInDown   ">
                  <div id="formContent">

                     <div className="fadeIn first">
                        <br></br>
                        <img src={logo} width="130px" alt="User Icon" />
                        <br></br>
                     </div>
                     <form onSubmit={this.manejadorSubmit} >
                        <input type="text" className="fadeIn second" name="usuario" placeholder="Usuario" onChange={this.manejadorChange} />
                        <input type="password" className="fadeIn third" name="contraseña" placeholder="Contraseña" onChange={this.manejadorChange} />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}      />
                     </form>

                     <div id="formFooter">
                        <a className="underlineHover" href="https://ul.edu.co/uleduco/programas/pregrado/facultad-de-ingenier%C3%ADa/ingenier%C3%ADa-de-sistemas-y-computaci%C3%B3n.html">CUL CORPORACION UNIVERSITARIA LATINOAMERICANA</a>
                     </div>
                     </div>
                  </div>
                  </div>
            </section>
             
         </React.Fragment>
      )

   }

}

export default Login