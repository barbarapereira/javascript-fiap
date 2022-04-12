
import React from 'react';
import './Contador.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function ContadorView({count, clickButton}) {
    return (
        <Container>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/300/200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/300/200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/300/200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/300/200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/300/200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
    );
}
export default ContadorView;