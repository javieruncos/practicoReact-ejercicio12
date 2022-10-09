import React from 'react';
import { Row } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaNoticia = ({arregloNoticia}) => {
    return (
        <div className='mt-5'>
            <Row>

                {
                    arregloNoticia.map((item,indice)=><Noticia item={item} key={indice}/>)
                }
                
            </Row>
        </div>
    );
};

export default ListaNoticia;