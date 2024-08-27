import NavBar from "./NavBar";
import { Button, Container } from "react-bootstrap";
import ProductCard from "./Product/ProductCard";
import Slider from "./Slider";
import { getLabelText } from './MultipleLanguageSheets'

import ProductCardHRM from "./Product/ProductCardHRM";
import ProductCardCHM from "./Product/ProductCardCHM";
import ProductCardIBM from "./Product/ProductCardIBM";
import Footer from "./Footer";

export default function Home() {
    let templatetype = 'home'
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                <h2 className={'mt-3'}>{getLabelText('Popular Products', templatetype)}</h2>
                <div className="product-grid d-flex flex-wrap">
                    <ProductCardHRM></ProductCardHRM>
                    <ProductCardCHM></ProductCardCHM>
                    <ProductCardIBM></ProductCardIBM>
                    {/* <ProductCard></ProductCard> */}
                </div>
            </Container>
            <Footer></Footer>
        </div>
    )
}