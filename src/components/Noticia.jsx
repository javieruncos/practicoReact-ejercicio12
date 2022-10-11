import React from "react";
import { Col ,Card,Button} from "react-bootstrap";

const Noticia = ({item}) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={item.urlToImage} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
