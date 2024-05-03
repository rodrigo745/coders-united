import "../login/Login.css";
import { FaUser , FaLock} from "react-icons/fa";
import Link from "next/link";


export default function CreateCuenta(props) {
    return (
        <div>
             <h1 className="Title">Crear cuenta nueva</h1>
             <div className="Create">
                        <form className="flex space-x-10" action="">
                            <div>

                                <div className="input-box">
                                    <input type="text" placeholder="Nombres" required/>
                                </div>

                                <div className="input-box">
                                    <input type="text" placeholder="Ingrese su usuario" required />
                                    <FaUser className="icon"/>
                                 </div>
                                 

                                <div className="input-box">
                                    <input type="date" placeholder="Fecha de nacimiento" required/> 
                                </div>

                                <button ><Link href="/pages/inicio ">Registrarte</Link></button>
                            </div>
        
                            <div>
                            
                            
                            <div className="input-box">
                                <input type="text"   placeholder=" Apellidos" />
                            </div>


                            <div className="input-box">
                                <input type="password" placeholder="Crear contraseña" required/>
                                <FaLock className="icon"/>
                            </div>

                            

                            <div className="flex space-x-5">
                                <input type="radio" name="sexo"/><span className= "cursor-pointer font-bold">Masculino </span>
                                <input type="radio" name="sexo"/><span className= "cursor-pointer font-bold">Femenino</span>
                                <input type="radio" name="sexo"/><span className= "cursor-pointer font-bold">Otro</span>
                            </div>

                            <button className="mt-14" onClick={props.cambio}>Pagina principal</button>
                            </div>    
                    </form>
      
                </div> 
      
        </div>
    )
}