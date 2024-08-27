import NavBar from "../NavBar";
import {Button, Container} from "react-bootstrap";
import Slider from "../Slider";
import ProductCardCHM from "../Product/ProductCardCHM";
import Footer from "../Footer";

export default function OngoingProjects() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container className={'my-5'}>
                <h1>Ongoing Projects</h1>
                <ProductCardCHM></ProductCardCHM>
            </Container>
            <Footer></Footer>
        </div>
    )
}