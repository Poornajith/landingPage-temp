import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { getLabelText } from '../MultipleLanguageSheets';
import HandleNavigation from "../HandleNavigation";

export default function ProductCard_IBM() {
    let templatetype = 'product'
    const navigate = useNavigate()
    return (
        <div onClick={ () => HandleNavigation(navigate,'/product')}>
            <Card style={{ height: '18rem', width: '18rem' }} className={'m-2'}>
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/digital-education-revolution-enhancing-skills-advancing-careers-with-online-platforms_1274913-11278.jpg?w=740" />
                <Card.Body>
                    <Card.Title>{getLabelText('Billing Modules', templatetype)}</Card.Title>
                    <Card.Text>
                        {getLabelText('various customized products to handle customer billing', templatetype)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}