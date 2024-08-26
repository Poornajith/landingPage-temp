import NavBar from "./NavBar";
import { Button, Container } from "react-bootstrap";
import ProductCard from "./Product/ProductCard";
import Slider from "./Slider";
import { getLabelText } from './MultipleLanguageSheets'

import ProductCard_HRM from "./Product/ProductCard_HRM";
import ProductCard_CHM from "./Product/ProductCard_CHM";
import ProductCard_IBM from "./Product/ProductCard_IBM";

export default function Home() {
    let templatetype = 'home'
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                <h2 className={'mt-3'}>{getLabelText('Popular Products', templatetype)}</h2>
                <div className="product-grid d-flex flex-wrap">
                    <ProductCard_HRM></ProductCard_HRM>
                    <ProductCard_CHM></ProductCard_CHM>
                    <ProductCard_IBM></ProductCard_IBM>
                    {/* <ProductCard></ProductCard> */}
                </div>
            </Container>
        </div>
    )
}