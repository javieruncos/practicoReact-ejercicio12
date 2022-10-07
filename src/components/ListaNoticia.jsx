import React from 'react';
import { Row } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaNoticia = () => {
    return (
        <div className='mt-5'>
            <Row>
                <Noticia/>
            </Row>
        </div>
    );
};

export default ListaNoticia;