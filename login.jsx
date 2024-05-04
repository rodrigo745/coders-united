import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Login.css';


function Login(props) {
    return (
        <div className= "Login">
                    <div className="form-box login">
                        <form action="">
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="text" placeholder="Ingrese su usuario" required />
                                <FaUser className="icon"/>
                            </div>
                            
                
                    <div className="input-box">
                        <input type="password" placeholder="Ingrese la contraseña" />
                        <FaLock className="icon"/>
                    </div>

                    <div className="Remenber">
                            <a href="#">¿Has olvidado la contraseña?</a>
                        </div><br/>

                        <button><Link href="/pages/inicio" >Iniciar Sesión</Link></button>
                        
                        <div className="Registro-link"> 
                           <p>¿No tienes una cuenta? <span className= "cursor-pointer font-bold" onClick={props.cambio}>Registrate</span></p>
                        </div>
                </form>

            </div>  

        </div>
    );
};

export default Login;