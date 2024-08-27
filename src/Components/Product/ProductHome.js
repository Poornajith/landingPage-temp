import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import NavBar from "../NavBar";
import Slider from "../Slider";
import ProductCardHRM from "./ProductCardHRM";
import ProductCardCHM from "./ProductCardCHM";
import ProductCardIBM from "./ProductCardIBM";
import { getLabelText } from '../MultipleLanguageSheets'
import Footer from "../Footer";

export default function ProductHome() {
    let templatetype = 'product'
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <div className={'m-5'}>
                <h1>{getLabelText('Our Products', templatetype)}</h1>
                <p>{getLabelText('Software Products and Custom Development Solutions', templatetype)}</p>
                <div className="slider-nav text-center">
                    <i className="bi bi-three-dots"></i>
                </div>

            </div>
            <Container>
                <div className="product-grid d-flex flex-wrap">
                    <ProductCardHRM></ProductCardHRM>
                    <ProductCardCHM></ProductCardCHM>
                    <ProductCardIBM></ProductCardIBM>
                    <ProductCard></ProductCard>
                    <ProductCardCHM></ProductCardCHM>
                    <ProductCardIBM></ProductCardIBM>
                    {/* <ProductCard></ProductCard> */}
                </div>
            </Container>
            <Footer></Footer>
        </div>
    )
}