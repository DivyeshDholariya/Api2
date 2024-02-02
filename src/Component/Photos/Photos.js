import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';


function Photos() {
    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    })
    return (
        <div>
            <Container>
                <Row>
                    {
                        data.map((ele, index) => {
                            return (
                                <Col className='mb-4'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.url} />
                                        <Card.Body>
                                            <Card.Title>{ele.albumId}</Card.Title>
                                            <Card.Title>{ele.id}</Card.Title>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Photos;
