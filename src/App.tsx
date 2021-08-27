import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import { urlClimas } from './endpoints';

function App() {
  useEffect(()=>{
    axios.get(urlClimas)
      .then((respuesta: AxiosResponse<any>) => {
        console.log(respuesta.data);
      });
  },[]);

  return (
    <>
      <h1>aplicacion react</h1>
      <p>comunicacion entre ASP.et core y react</p>
    </>
  );
}

export default App;
