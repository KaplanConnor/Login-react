import React, { useState } from "react";
import UserIcon from "./icons/UserIcon";
import PadlockOpen from "./icons/PadlockOpen";
import FacebookIcon from "./icons/FacebookIcon";
import GoogleIcon from "./icons/GoogleIcon";
import InstagramIcon from "./icons/InstagramIcon";


const Register =()=>{
//Objeto con los datos del formulario 
      const[userData,setUserData]= useState({
            user:"",
            password:"",
            email:""

      });

      const[pass2,setPass2]=useState("");
//Función que guarda mi objeto en localStorage
      function guardarDatos(){
            const jsonData=JSON.stringify(userData);
            localStorage.setItem(userData.user,jsonData);
           
      }
//Función que compara que el password sea el mismo
      function comparar(e) {
            e.preventDefault();
            const {user,password,email}=userData;
            let pass2=document.getElementById("password2").value;
            let encontrado=false;
         

            if (!user || !password||!email|| !pass2){
                  alert("Complete los campos");
            }else{
                  if(password!==pass2){
                        alert("Los Password son distintos");
                  }else{

                        //Comprobación si el usuario se encuentra en el sistema
                        for(let i=0;i<localStorage.length;i++){
                              const storedUser=localStorage.key(i);
                              if(user.trim().toLowerCase()===storedUser){
                                    alert("El usuario ya se encuentra en el sistema");
                                    encontrado=true;
                                    break;
                                    
                              }
                        }
                        if (!encontrado){      
                        guardarDatos();
                        alert("Usuario guardado correctamente");
                        }
                  }
            }
      }

      return(
            <div className="container">
                  <div id="login_icon">
                        <UserIcon className="user_icon"/>
                        <PadlockOpen className="icon"/>
                        <h1>register</h1>
                   </div>
                  <form className="form_login">
                        <input
                              className="input_form"      
                              type="text"
                              id="user"
                              name="user"
                              placeholder="Introduzca nombre de usuario"
                              onChange={(e)=>setUserData({...userData, user: e.target.value.trim().toLowerCase()})}
                              required
                        />
                        <input 
                              className="input_form"
                              type="email"
                              id="mail"
                              name="mail"
                              placeholder="Introduzca el email"
                              onChange={(e)=>setUserData({...userData, email: e.target.value.trim().toLowerCase()})}
                              required
                        />
                        <input 
                              className="input_form"
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Introduzca el password"
                              onChange={(e)=>setUserData({...userData, password: e.target.value})}
                              required
                        />
                        <input
                              className="input_form"
                              type="password"
                              id="password2"
                              name="password2"
                              placeholder="Repita el password"
                              onChange={(e)=>e.target.value}
                              required
                        />
                        
                        <p className="boton_p"><button className="boton_submit" type="submit" onClick={comparar}>
                              Registrar
                        </button></p>
                        <div className="social_login" id="social_register" >
                              <FacebookIcon className="icon" id="logo_face"/>
                               <GoogleIcon className="icon"/>
                              <InstagramIcon className="icon"/>
                         </div>
      
                  </form>

            </div>
      )
}
export default Register;