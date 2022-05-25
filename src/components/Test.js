import axios from "axios";
import React from "react";
const url ="https://apiparcialnodejs.herokuapp.com/Listvehiculo ";

class Test extends React.Component {

 
state={
    data:[]
}

getpeticion=()=>{
axios.get(url).then(Response=>{

console.log(Response.data)

})


}


componentDidMount(){

    this.getpeticion();
}

render(){

 

    return(

        <div>hola</div>
    )
}





}


export default Test