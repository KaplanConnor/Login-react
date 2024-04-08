import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Recovery from "./Recovery";
import "../App.css";

const Navigator=()=>{

      const [componentActual, setComponenteActual]=useState("login"); 
      const seeComponents=(component)=>{
            setComponenteActual(component);
      }     
return (
<div>
      <button className="boton-nav" onClick={()=>seeComponents("login")}>Login</button>
      <button className="boton-nav" onClick={()=>seeComponents("registrar")}>Registrar</button>
      <button className="boton-nav" onClick={()=>seeComponents("recuperar")}>Recuperar</button>

      {componentActual==="login" && <Login/>}
      {componentActual==="registrar" && <Register/>}
      {componentActual==="recuperar" && <Recovery/>}
</div>
)

}
export default Navigator;