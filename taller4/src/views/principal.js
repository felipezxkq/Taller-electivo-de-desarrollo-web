import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';

export default function App() {
  const[autorizado, setAutorizado] = userState(false);

  useEffect(() => {
    renderizadoCondicional();
  }, []);

  function renderizadoCondicional(){
    axios
    .post("http://localhost:4000/usuario/vigencia")
    .then(
      (response) => {
        console.log(response.data);
        if(response.status == 200){
          setAutorizado(true)
        }
      }
    )
    .catch((err) => {
      if(err.response){
        if(err.response.status == 401){
          setAutorizado(false)
        }
      }
    });
  }
  console.log(errors);
  
  return (
    <Home/>
  );

  function Home(){
      if(autorizado){
          return(
              <Router>
                  <div>
                      <h1>Bienvenidos</h1>
                      <nav>
                          <ul>
                              <li>
                                  <Link to="/">Home</Link>
                              </li>
                              <li>
                              <Link to="/about">About</Link>
                              </li>
                              <li>
                              <Link to="/users">Users</Link>
                              </li>
                              <li>
                              <Link to="/productos">Productos</Link>
                              </li>
                          </ul>
                      </nav>
                  

                  <Switch>
                      <Route path="productos">
                          <Producto />
                      </Route>
                  </Switch>
                  </div>
              </Router>

          )
      }else{
          return <h2> Cargando... </h2>
      }
  }
}