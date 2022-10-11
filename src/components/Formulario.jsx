import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import ListaNoticia from "./ListaNoticia";






const Formulario = () => {
  let categoria ;
  let paises;
  let respuesta;

  const [select, setSelect] = useState("");
  const [pais, setPais] = useState("")
  const [arregloNoticia, setarregloNoticia] = useState([]);
   
  useEffect(() => {
    consultarApi();
  },[select,pais]);


  if(select === "Deportes"){
    categoria= "sports"
  }else if(select==="Business"){
     categoria = "business"
  }else if (select==="Entretenimiento"){
    categoria="entertainment"
  }


  if(pais === "Argentina"){
      paises = "ar"
  }else if(pais === "USA"){
     paises = "us"
  }else if(pais === "Inglaterra"){
    paises = "gb"
  }

  const consultarApi = async () => {
    try {
      respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${paises}&category=${categoria}&apiKey=1abe48db8e0d43459467502a3cb538f7`
      );
      let dato = await respuesta.json();
      setarregloNoticia(dato.articles);
      console.log(dato.articles);
    } catch (error) {
      console.log(error);
    }

   
  };

  return (
    <div className="mt-5">
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Label className="me-4 mt-2">Selecciona una categoria</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="w-50"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option>Selecciona una categoria</option>
            <option value="Deportes">Deportes</option>
            <option value="Business">Negocios</option>
            <option value="Entretenimiento">Entretenimiento</option>
          </Form.Select>
          <Form.Select 
          aria-label="Default select example"
           className="w-50"
            onChange={(e)=>setPais(e.target.value)}
            value={pais}>
            <option>Selecciona un pais</option>
            <option value="Argentina">Argentina</option>
            <option value="USA">Estados Unidos</option>
            <option value="Inglaterra">Inglaterra</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticia arregloNoticia={arregloNoticia} />
    </div>
  );
};

export default Formulario;
