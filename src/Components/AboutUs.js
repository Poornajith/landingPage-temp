import NavBar from "./NavBar";
import {Button, Container} from "react-bootstrap";
import "../App.css";
import Slider from "./Slider";
import our_team from '../assets/images/business2.png'

export default function AboutUs() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <div className="slider m-5 ps-5">
                <Container>
                    <h1>Simply Your business with our help</h1>
                    <p>We specialize in crafting software solutions tailored to your exact needs.
                        Our diverse product range offers ready-to-use options with flexible pricing plans.
                        If your requirements are unique, our expert team can customize a solution just for you.
                        Your satisfaction is our priority, and we're committed to providing exceptional service.</p>
                    <div className="m-5">
                        <h2 className={'my-3'}> Meet our team</h2>
                        <img src={our_team} alt="our team" className={'text-center our-team mb-5'}/>
                    </div>

                </Container>
            </div>

        </div>
    )
}