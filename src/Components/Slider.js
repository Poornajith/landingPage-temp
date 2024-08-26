import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../index.css'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { getLabelText } from './MultipleLanguageSheets'
export default function Slider() {
    let templatetype = 'slider'
    const navigate = useNavigate()
    return(
        <div className={'slider'}>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="p-5 slider-div slider-div-1 text-white">
                    <h1>{getLabelText('Elevate your business with our', templatetype)} <br /> {getLabelText('Cutting-edge Software', templatetype)}</h1>
                    <h6>{getLabelText('Software Products and Custom Development Solutions', templatetype)} </h6>
                        < Button className = { 'm-1'} onClick = {()=> navigate('/products')}>{getLabelText('Explore Products', templatetype)} </Button>
                    < Button className={'m-1'} onClick={() => navigate('/projects')}>{getLabelText('Start Your Project', templatetype)} </Button>
                </div>
                <div className={'p-5 slider-div slider-div-2 text-white align-items-center'}>
                    <h1 className={'mt-5'}>{getLabelText('Enlightening Your Future With Our Solutions', templatetype)}</h1>
                        < h6 > {
                        getLabelText('Contact Us Today !', templatetype)}</h6>
                    <Button className={'m-1'} onClick={() => navigate('/contactus')}>{getLabelText('Contact us', templatetype)}</Button>
                </div>
                <div className={'p-5 slider-div slider-div-3 text-white'}>
                    <h1 className={'mt-5'}>{getLabelText('Innovative Software Tailored to Your Needs', templatetype)}</h1>
                        < h6 > {
                        getLabelText('We understand that every business is unique.', templatetype)} <br/>
                        {getLabelText('That\'s why we offer custom software development to meet your specific requirements.', templatetype)}
                    </h6>
                    <Button className={'m-1'} onClick={() => navigate('/products')}>{getLabelText('Explore Products', templatetype)}</Button>
                </div>
                <div className={'p-5 slider-div slider-div-4 text-white'}>
                    <h1 className={'mt-5'}>{getLabelText('Your Vision, Our Expertise: Custom Software Development', templatetype)}</h1>
                        < h6 > {
                        getLabelText('Have a unique idea? Let\'s bring it to life.', templatetype)} <br/>
                                { getLabelText('Our skilled developers can create bespoke software solutions that align perfectly with your business goals.', templatetype)}
                    </h6>
                    <Button className={'m-1'} onClick={() => navigate('/projects')}>{getLabelText('Start Your Project', templatetype)}</Button>
                </div>
            </Carousel>
        </div>
    )
}