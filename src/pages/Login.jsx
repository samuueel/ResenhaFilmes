import React from "react"
import "../styles/Login.css"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container-body">
        <Navbar page="cadastro"/>
        <div className="container-form">
           <form onSubmit={handleSubmit}>
                <div className="form-login">
                    <h3>LOGIN</h3>
                    <div className="form-container-input">
                        <input type="email" name="email" className="form-field" placeholder="Email *" onChange={(e) => setEmail(e.target.value)} value={email}/>                                            
                    </div>
                    <div className="form-container-input">
                        <input type="password" name="password" className="form-field" placeholder="Senha *" onChange={(e) => setPassword(e.target.value)} value={password}/>                            
                    </div>
                    {!loading && <button type="submit" className="btn">Entrar</button>}
                    {loading && (
                    <button type="submit" className="btn" disabled>
                      Aguarde...
                    </button>
                    )}
                    {error && <p className="error">{error}</p>}
                    <span className="span-cadastro">
                        Não tem conta? 
                        <Link to="/cadastro">
                            Cadastre-se
                        </Link>
                    </span>
                </div>         
            </form> 
        </div>
        
    </div>
  )
}

export default Login

