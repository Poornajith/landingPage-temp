import {Button} from "react-bootstrap";
import HandleNavigation from "../HandleNavigation";
import {useNavigate} from "react-router-dom";

export default function Enterprise() {
    const navigate = useNavigate()
    return(
        <div>
            <h2>Enterprise</h2>
            <p>Designed for large organizations. Includes all Standard features plus robust reporting and analytics,
                custom integrations, and dedicated support.</p>
            <Button onClick={()=>HandleNavigation(navigate, '/contactus')}>
                Contact Us for Pricing
            </Button>
        </div>
    )
}