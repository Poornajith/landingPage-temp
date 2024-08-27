import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { getLabelText } from '../MultipleLanguageSheets'
import HandleNavigation from "../HandleNavigation";
export default function ProductCardHRM() {
    let templatetype = 'product'
    const navigate = useNavigate()
    return (
        <div onClick={ () => HandleNavigation(navigate,'/product')} className={'mb-5'}>
            <Card style={{ height: '18rem', width: '18rem' }} className={'m-2 my-5'}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-style_23-2147938225.jpg?t=st=1724655574~exp=1724659174~hmac=cdf095d6d2cd6d664e7ddfddbc75a3ecc168aa1012167f3f0a13b6cdce354b46&w=740" />
                <Card.Body>
                    <Card.Title>Human Resource Module</Card.Title>
                    <Card.Title>{getLabelText('HRM Module', templatetype)}</Card.Title>
                    <Card.Text>
                        {getLabelText('Easiest way to handle Human Resources', templatetype)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}