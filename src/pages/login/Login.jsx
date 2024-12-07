import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import "./Login.css";

const Login = () => {
    const { setIsLogged } = useContext(AuthContext);
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario.length > 0 && contraseña.length > 0) {
            toast.success("sesion iniciada");
            setIsLogged(true);
            navigate("/");
        } else {
            toast.error("ingrese usuario y contraseña");
        }
    }

    return (
        <div className="contenedor">
            <form className="form"> 
                <h2>Inicio de session</h2>
                <div className="input">
                    <label className="label" htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" placeholder="usuario" onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="input">
                    <label  className="label" htmlFor="contraseña">contraseña</label>
                    <input type="password" id="contraseña" placeholder="contraseña" onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <button className="boton" onClick={(e) => handleSubmit(e)}>Iniciar session</button>
            </form>
        </div>
    )
}

export default Login