import React, { useState } from "react";
import UserIcon from "./icons/UserIcon";
import KeyIcon from "./icons/KeyIcon";
import FacebookIcon from "./icons/FacebookIcon";
import GoogleIcon from "./icons/GoogleIcon";
import InstagramIcon from "./icons/InstagramIcon";


const Recovery=()=> {

      const [user,setUser]=useState("");

      function modificarCorreo(correo){
            const [name,dominio]=correo.split("@");
            const part1=name.substring(0,Math.min(name.length,3));
            const cadenaAsteriscos="*".repeat(Math.max(name.length-3,0));
            const newCorreo=part1+cadenaAsteriscos+"@"+dominio;
            return(newCorreo);
      }

      const enviarCorreo=()=>{
            let userMail=user;
            let encontrado=false;
            let mail="";
            
             //Comprobación si el usuario se encuentra en el sistema
             for(let i=0;i<localStorage.length;i++){
                  const storedUser=localStorage.key(i);
                  if(userMail.trim().toLowerCase()===storedUser){
                        const userDataString=localStorage.getItem(storedUser);
                        const userData=JSON.parse(userDataString);
                        mail=userData.email;
                        alert("Se ha mandado un correo a: "+ modificarCorreo(mail));
                        encontrado=true;
                        break;
                        
                  }
            }
            if (!encontrado){
                  alert("El usuario no se encuentra en el sistema");
            }
            
      }
      
      return (
            <div className="container">
                   <div id="login_icon">
                        <UserIcon className="user_icon"/>
                        <KeyIcon className="icon"/>
                        <h1>recovery</h1>
                   </div>
                  <form id="recuperar" onSubmit={enviarCorreo}>
                        <label className="label_form" htmlFor="user">User </label>
                        <input
                              className="input_form"      
                              type="text"
                              id="user"
                              name="user"
                              onChange={(e)=>{setUser(e.target.value)}}
                              required
                        />
                        <p className="boton_p"><button className="boton_submit" type="submit">Enviar Correo</button></p>
                  </form>
                  <div className="social_login" id="social_recovery">
                        <FacebookIcon className="icon" id="logo_face"/>
                        <GoogleIcon className="icon"/>
                        <InstagramIcon className="icon"/>
                  </div>
            </div>
             

      );

};

export default Recovery;