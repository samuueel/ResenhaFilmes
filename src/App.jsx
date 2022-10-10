import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import { useAuthentication } from "./hooks/useAuthentication"

import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthProvider, useAuthValue } from './context/AuthContext'
import "./App.css";

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined
    
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) return <p>Carregando...</p>

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movie/:id" element={<Movie />} />
              <Route path="search" element={<Search />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/cadastro" element={!user ? <Cadastro /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>   
  );
}

export default App;
