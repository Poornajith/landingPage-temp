import NavBar from "../NavBar";
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProductCard from "../Product/ProductCard";
import Slider from "../Slider";

export default function ContactUs() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <div className="slider m-5 ps-5">
                <Container className={'m-5'}>
                    <h1>How can we help you today? </h1>
                    <p>Welcome our help center</p>
                    <div className="mt-2">
                        <h3>Choose a service</h3>
                        <p>Select a service to find helpful tips and customer service numbers</p>
                    </div>
                    <Row className={'m-2'}>
                        <Col>Select service</Col>
                        <Col>
                            <Form.Select aria-label="Default select example" size="lg">
                                <option>I have an issue with</option>
                                <option value="1">Project</option>
                                <option value="2">Product</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className={'m-2'}>
                        <Col>
                            Tell us your Name
                        </Col>
                        <Col>
                            <Form.Control
                            type="text"
                            id="inputName"
                            aria-describedby="serviceHelpBlock"
                            />
                        </Col>
                    </Row>
                    <Row className={'m-2'}>
                        <Col>
                            Email
                        </Col>
                        <Col>
                            <Form.Control
                            type="email"
                            id="inputEmail"
                            aria-describedby="serviceHelpBlock"
                            />
                        </Col>
                    </Row>
                    <Row className={'m-2'}>
                        <Col>
                            Tell us your issue
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={'text-end me-3 mb-5'}>
                        <Col>
                            <Button className={'mb-5'}>Submit request</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}