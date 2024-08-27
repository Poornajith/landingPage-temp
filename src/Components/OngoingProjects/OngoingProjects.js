import NavBar from "../NavBar";
import {Button, Container} from "react-bootstrap";
import Slider from "../Slider";
import ProductCardCHM from "../Product/ProductCardCHM";
import Footer from "../Footer";
import ProductCardIBM from "../Product/ProductCardIBM";
import ProductCardHRM from "../Product/ProductCardHRM";
import ProductCard from "../Product/ProductCard";

export default function OngoingProjects() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container className={'my-5'}>
                <h1>Ongoing Projects</h1>
                <div className="product-grid d-flex flex-wrap">
                    <ProductCardCHM></ProductCardCHM>
                    <ProductCardIBM></ProductCardIBM>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    )
}