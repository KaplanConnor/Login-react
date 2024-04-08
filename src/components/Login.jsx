import React, {useState} from 'react'
import UserIcon from './icons/UserIcon';
import Padlock from './icons/Padlock';
import FacebookIcon from './icons/FacebookIcon';
import GoogleIcon from './icons/GoogleIcon';
import InstagramIcon from './icons/InstagramIcon';
import "../App.css";



const Login=() => {
// Guardamos en useState lo que recogemos en cada campo
  const [miLogin,setLogin]= useState("false");
  const [usu, setUsu]= useState("hola");
  const [pass,setPass]=useState("");
  


//Función para captar el valor de los campos para su guardado 
  function iniciarSesion(e){
      e.preventDefault();
      let user=document.getElementById("user").value;
      let password=document.getElementById("password").value;
      let userData=null;
      

      if(user.length===0|| password.length===0){
            alert ("Completar campos")
      }else{
            //Recuperamos el valor del usuario
            const userDataString=localStorage.getItem(user);
            
            if (userDataString){
                  userData=JSON.parse(userDataString);
                  
                  if(user.trim().toLowerCase()===userData.user && password===userData.password){
                        alert("El login es correcto");

                        setLogin("true");
                       
                  }else{
                        alert("El password es incorrecto");
                        setLogin("false");
                  }
            }else{
                  alert("El usuario no se encuentra en el sistema");
            }
            
  }
}    
  return (
  
<div className="container">
      <div id="login_icon">
            <UserIcon className="user_icon"/>
            <Padlock className="icon"/>
            <h1>login</h1>
      </div>
      <form className="form_login">
            <p><label className='label_form' htmlFor="user">user</label></p>
            <p><input 
                  className='input_form'
                  type="text"
                  id="user"
                  name="user"
                  onChange={(e)=>setUsu(e.target.value)}
                  required
            /></p>
            <p><label  className="label_form" htmlFor="password">password</label></p>
            <p><input
                  className='input_form'
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e)=>setPass(e.target.value)}
                  required
            /></p>
            <p className='boton_p'><button className="boton_submit" type="submit" onClick={iniciarSesion}>Entrar</button></p>
      </form>
      <div className="social_login">
            <FacebookIcon className="icon" id="logo_face"/>
            <GoogleIcon className="icon"/>
            <InstagramIcon className="icon"/>
      </div>
      
</div>
      
)
}
export default Login;
