import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from '../assets/logo.jpg'
import ColorTheme from "./ColorTheme";
import LanguageSelect from "./LanguageSelect";
import { getLabelText } from './MultipleLanguageSheets'
import HandleNavigation from "./HandleNavigation";

export default function NavBar() {
    let templatetype = 'navbar'
    const navigate = useNavigate()
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => HandleNavigation(navigate,`/`)}>
                        <img src={logo} alt="logo" className={'logo'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => HandleNavigation(navigate,`/`)}>{getLabelText('Home', templatetype)}</Nav.Link>
                            <Nav.Link onClick={() => HandleNavigation(navigate,`/products`)}>{getLabelText('Products', templatetype)}</Nav.Link>
                            <Nav.Link onClick={() => HandleNavigation(navigate,`/projects`)}>{getLabelText('Projects', templatetype)}</Nav.Link>
                            <Nav.Link onClick={() => HandleNavigation(navigate,`/ongoingprojects`)}>{getLabelText('Ongoing Projects', templatetype)}</Nav.Link>
                            <Nav.Link onClick={() => HandleNavigation(navigate,`/aboutus`)}>{getLabelText('About Us', templatetype)}</Nav.Link>
                            <Nav.Link onClick={() => HandleNavigation(navigate,`/contactus`)}>{getLabelText('Contact Us', templatetype)}</Nav.Link>
                        </Nav>
                        <Button className={'me-2 d-none'} onClick={() => HandleNavigation(navigate,`/login`)}>login</Button>
                        <ColorTheme></ColorTheme>
                        <LanguageSelect></LanguageSelect>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}