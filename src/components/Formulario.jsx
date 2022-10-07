import React from "react";
import { Form } from "react-bootstrap";
import ListaNoticia from "./ListaNoticia";

const Formulario = () => {
   


  


  return (
    <div className="mt-5">
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Label className="me-4 mt-2">Selcciona una categoria</Form.Label>
          <Form.Select aria-label="Default select example" className="w-75">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticia/>
    </div>
  );
};

export default Formulario;
