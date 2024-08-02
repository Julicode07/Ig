import React from "react";
import "../index.css";
import LogoInstagram from "../assets/logo-instagram.png";
import Header from "../components/Login/Header.jsx";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <form className="border border-gray-200 bg-white shadow-md rounded flex flex-col px-8 py-6 mb-4 w-80">
          <picture className="flex justify-center mb-4">
          
            <img src={LogoInstagram} alt="login" className="h-32" />
          </picture>
          <input
            className="p-2 my-2 border bg-slate-100 border-gray-200 rounded text-sm focus:outline-blue-400"
            type="text"
            placeholder="Telefono, usuario o correo electronico"
          />
          <input
            className="p-2 my-2 border bg-slate-100 border-gray-200 rounded text-sm focus:outline-blue-400"
            type="password"
            placeholder="Contraseña"
          />
          <Link
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl mt-4 text-center"
            to={"/mainpage"}
          >
            Iniciar sesión
          </Link>
          <button className="text-sm text-center mt-4">
            ¿Olvidaste tu contraseña?{" "}
          </button>
        </form>
        <div className="border border-gray-200 bg-white shadow-md rounded flex flex-col px-8 py-6 w-80">
          <p className="text-sm text-center">
            ¿No tienes una cuenta?{" "}
            <span className="text-blue-400">Regístrate</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;