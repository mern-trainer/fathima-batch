// Mapping -> Mapping is a process of converting one data structure to another data structure.
// array manipulation

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Mapping = () => {
    
    // const array = [1, 2, 3];

    // const arr = array.map((number) => {
    //     return <div className="text-danger bg-dark p-2 m-1">{ number }</div>
    // })

    const array = [{
        id: 1,
        image: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
        title: "Product title",
        description: "Product description"
    }, {
        id: 2,
        image: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
        title: "Product title",
        description: "Product description"
        }, {
        id: 3,
        image: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
        title: "Product title",
        description: "Product description"
        }, {
        id: 4,
        image: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
        title: "Product title",
        description: "Product description"
    }]

    return <div>
        <h1>Mapping</h1>
         <Container fluid>
            <Row className="g-1">
                {
                    array.map((product, index) => {
                        // element identifier (key) -> 
                        return <Col key={index} xs="12" sm="6" md="4" lg="3" xl="2">
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Button variant="success" className="w-100">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    })  
                }
            </Row>            
        </Container>
    </div>
}

export default Mapping;