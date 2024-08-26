import NavBar from "../NavBar";
import { Button, Container } from "react-bootstrap";
import Slider from "../Slider";
import { getLabelText } from '../MultipleLanguageSheets'
import {useNavigate} from "react-router-dom";
import HandleNavigation from "../HandleNavigation";
export default function ProjectsHome() {
    let templatetype = 'project'
    const navigate = useNavigate()
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                <div className={'my-5'}>
                    <h1>{getLabelText('Software Solutions, Crafted for You', templatetype)}</h1>
                    <p>{getLabelText('We transform ideas into reality through innovative software development.', templatetype)}</p>
                </div>
                <p>
                    {getLabelText('Our team of skilled developers is dedicated to delivering exceptional software solutions tailored to your specific needs. From concept to completion, we provide comprehensive project management and development services.', templatetype)}
                </p>
                <Button className={'m-2'} onClick={()=> HandleNavigation(navigate,'/contactus')}>
                    {getLabelText('Contact Our Agent', templatetype)}
                </Button>

            </Container>
        </div>
    )
}