import React from 'react'
import "../styles/Banner.css"
import video from "../assets/background.mp4"
import { useAuthValue } from "../context/AuthContext";

const Banner = () => {
    const {user} = useAuthValue()
  return (
    <div className='banner'>
        {user ? <h4>Bem Vindo {user.displayName}</h4> : <h4>Bem vindo!</h4>} 
        <h1>RESENHA FILMES</h1>
        <h3>MELHOR SITE DE RESENHA DE FILMES!</h3>
        <video src={video} loop muted autoPlay></video>
    </div>
  )
}

export default Banner