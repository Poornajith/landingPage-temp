import {Container} from "react-bootstrap";
import HandleNavigation from "./HandleNavigation";
import {getLabelText} from "./MultipleLanguageSheets";
import {useNavigate} from "react-router-dom";

export default function Footer() {
    let templatetype = 'navbar'
    const navigate = useNavigate()
    return(
        <div className={'mt-5'}>
            <hr className={'mt-5'}/>
            <Container className={'my-5'}>
                <h6 onClick={() => HandleNavigation(navigate,`/`)} className={'my-3'}>
                    {getLabelText('Home', templatetype)}
                </h6>
                <h6 onClick={() => HandleNavigation(navigate,`/products`)} className={'my-3'}>
                    {getLabelText('Products', templatetype)}
                </h6>
                <h6 onClick={() => HandleNavigation(navigate,`/projects`)} className={'my-3'}>
                    {getLabelText('Projects', templatetype)}
                </h6>
                <h6 onClick={() => HandleNavigation(navigate,`/ongoingprojects`)} className={'my-3'}>
                    {getLabelText('Ongoing Projects', templatetype)}
                </h6>
                <h6 onClick={() => HandleNavigation(navigate,`/aboutus`)} className={'my-3'}>
                    {getLabelText('About Us', templatetype)}
                </h6>
                <h6 onClick={() => HandleNavigation(navigate,`/contactus`)} className={'my-3'}>
                    {getLabelText('Contact Us', templatetype)}
                </h6>
            </Container>
        </div>
    )
}