import {Button, Card, Col, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from '../assets/Logo.svg'
import ColorTheme from "./ColorTheme";
import { getLabelText } from './MultipleLanguageSheets'
import LanguageSelect from "./LanguageSelect";
import HandleNavigation from "./HandleNavigation";
export default function Login() {
    const navigate = useNavigate()
    let templatetype = 'login'
    return(
        <div className={''}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={()=> HandleNavigation(navigate,`/`)}>
                        <img src={logo} alt="logo" className={'w-20'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=> HandleNavigation(navigate,`/`)}>Home</Nav.Link>
                        </Nav>
                        <Button className={'me-2'} onClick={()=> HandleNavigation(navigate,`/signup`)}>Sign Up</Button>
                        <ColorTheme></ColorTheme>
                        <LanguageSelect></LanguageSelect>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="justify-content-center d-flex">
                <Card className="m-3 mt-5 p-4 border rounded">
                    <h1 className={'text-center mx-5'}>{getLabelText('Login', templatetype)}</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{getLabelText('Email Address', templatetype)}</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>
                                {getLabelText('Password', templatetype)}
                            </Form.Label>
                            <Col>
                                <Form.Control type="password" placeholder="Password"/>
                            </Col>
                        </Form.Group>
                    </Form>
                    <Button>{getLabelText('Login', templatetype)}</Button>
                </Card>
            </div>

        </div>
    )
}