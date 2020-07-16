import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    axios
    .post("http://localhost:4000/api/libros", data)
    .then(
      (response) => {
        console.log(response.data);
      }
    )
    .catch((error) => {
      console.log(error);
    });
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="undefined" placeholder="nombre" name="nombre" ref={register} />
      <input type="undefined" placeholder="autor" name="autor" ref={register} />
      <input type="undefined" placeholder="ano_publicacion" name="ano_publicacion" ref={register} />
      <input type="undefined" placeholder="idioma" name="idioma" ref={register} />

      <input type="submit" />
    </form>
  );
}
