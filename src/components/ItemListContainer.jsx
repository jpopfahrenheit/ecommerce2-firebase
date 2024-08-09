import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = collection(db, "items");

        getDocs(refCollection).then((snapshot) => {
            setItems(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            }))
        }).finally(()=> setLoading(false))

    }, [id]);

    if (loading) return <Container className="mt-4">Wait..</Container>

    if (items.length === 0) return <Container className="mt-4">No hay productos, la recesión</Container>

    console.log(items);

    return (
        <Container className="mt-4">
            <h1 className="titulo">Zapatillas {id && `- ${id}`}</h1>
            <Row className="g-4">
                {items.map((i) => (
                    <Col key={i.id} className="d-flex">
                        <Card>
                            <Card.Body className="tarjeta d-flex flex-column bg-warning">
                                <Card.Img variant="top" src={i.imageID} className="tarjetaImg" />
                                <Card.Title className="tarjetaTitulo flex-shrink-0">{i.marca}</Card.Title>
                                <Card.Text>{`${i.title}, ${i.description}, ${i.categoryID}`}</Card.Text>
                                <Card.Text>{`Precio: $${i.price}`}</Card.Text>
                                <Card.Text>{`Stock disponible: ${i.stock} unidades`}</Card.Text>
                                <Link to={`/item/${i.id}`} className="mt-auto">
                                    <Button variant="primary">Ver</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};