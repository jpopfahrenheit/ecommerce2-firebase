import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import data from "../data/products.json"
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardBody } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        new Promise((res, rej) => {
            setTimeout(() => res(data), 2000)
        })
            .then((response) => {
                const finded = response.find((i) => i.id === Number(id));
                setItem(finded)
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Container className="mt-4">Wait..</Container>

    return (
        <Container className="mt-4">
            <Card className="bg-warning"> 
                <CardBody>
                    <Row>
                        <Col className="descripcion bg-warning">
                            <Card.Title><h1>{item.nombre}</h1></Card.Title>
                            <Card.Img src={item.rutaImagen} className="tarjetaImg" />
                            <Card.Text><h5>{`${item.detalle}`}</h5></Card.Text>                            
                        </Col>
                        <Col xs={3} className="precio">
                            <Card.Text><h4>{`Stock disponible: ${item.stock} unidades`}</h4></Card.Text>
                            <Card.Text><h4>{`Precio: $${item.precio}`}</h4></Card.Text>
                            <Button variant="primary">Comprar ahora</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};


