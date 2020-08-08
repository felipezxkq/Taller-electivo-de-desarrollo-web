import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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


    <Router>
      <Switch>
        <Route path="/menu">
          {autorizado ? <Principal /> :<SignIn />}
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </Router>

  );
}
