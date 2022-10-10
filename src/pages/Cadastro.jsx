import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Cadastro.css"
import Navbar from "../components/Navbar"
import { useAuthentication } from "../hooks/useAuthentication"

const Cadastro = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthentication()

  const handleClickCadastro = async(e) => {
    e.preventDefault();

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas não são iguais")
      return
    }

    const res = await createUser(user)
  };

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className="container-body">
        <Navbar page="login"/>
        <div className="container-form">
             <form onSubmit={handleClickCadastro}>
                <div className="form-cadastro">
                    <h3>CADASTRO</h3>
                    <div className="form-container-cadastro">
                        <input type="text" name="name" className="form-field" placeholder="Nome" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>                           
                    </div>
                    <div className="form-container-cadastro">
                        <input type="email" name="email" className="form-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>                      
                    </div>
                    <div className="form-container-cadastro">
                        <input type="password" name="password" className="form-field" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>                           
                    </div>
                    <div className="form-container-cadastro">
                        <input type="password" name="confirmPassword" className="form-field" placeholder="Confirme sua Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>                             
                    </div>
                    {error && <p className="error">{error}</p>}
                    {!loading && <button className="btn">Cadastrar</button>}
                    {loading && <button className="btn" disabled>Aguarde...</button>}
                    <span className="span-login">
                        Já tem conta? 
                        <Link to="/login">
                            Login
                        </Link>
                    </span>
                </div>          
            </form>
        </div>
       
    </div>
  )
}

export default Cadastro