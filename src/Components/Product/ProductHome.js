import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import NavBar from "../NavBar";
import Slider from "../Slider";
import ProductCard_HRM from "./ProductCard_HRM";
import ProductCard_CHM from "./ProductCard_CHM";
import ProductCard_IBM from "./ProductCard_IBM";
import { getLabelText } from '../MultipleLanguageSheets'

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
                    <ProductCard_HRM></ProductCard_HRM>
                    <ProductCard_CHM></ProductCard_CHM>
                    <ProductCard_IBM></ProductCard_IBM>
                    <ProductCard></ProductCard>
                    <ProductCard_CHM></ProductCard_CHM>
                    <ProductCard_IBM></ProductCard_IBM>
                    {/* <ProductCard></ProductCard> */}
                </div>
            </Container>
        </div>
    )
}