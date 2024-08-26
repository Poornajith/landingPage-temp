import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { getLabelText } from '../MultipleLanguageSheets'
import HandleNavigation from "../HandleNavigation";

export default function ProductCard_CHM() {
    let templatetype = 'product'
    const navigate = useNavigate()
    return (
        <div onClick={ () => HandleNavigation(navigate,'/product')}>
            <Card style={{ height: '18rem', width: '18rem' }} className={'m-2'}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/top-view-laptop-technology-background_23-2148127699.jpg?t=st=1724655448~exp=1724659048~hmac=74a156f77b0baade10f430744b3c5e7926cda4ec88ce95b24a3f26ba396bdebf&w=740" />
                <Card.Body>
                    <Card.Title>{getLabelText('Cheque Handling Module', templatetype)}</Card.Title>
                    <Card.Text>
                        {getLabelText('in/out Cheque handling tool for non-financial companies.', templatetype)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}