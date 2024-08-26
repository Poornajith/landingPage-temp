import NavBar from "../NavBar";
import {Button, Container} from "react-bootstrap";
// import ProductCard from "./Product/ProductCard";
import Slider from "../Slider";
import ProductCard_CHM from "../Product/ProductCard_CHM";

export default function OngoingProjects() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container className={'my-3'}>
                <h1 className={'mb-2'}>Ongoing Projects</h1>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <ProductCard_CHM></ProductCard_CHM>
            </Container>
        </div>
    )
}