import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import PricingPlans from "../PricingPlans/PricingPlans";
import project_mng from '../../assets/images/projectmng.png'
export default function Product() {
    return(
        <div>
         <NavBar></NavBar>
            <Container>
                <div className={'my-3'}>
                    <img className={'product-main-img'} src={project_mng} alt="project management"/>
                    <h1>Project Management Software</h1>
                    <p>Revolutionize the way you manage projects with our intuitive and powerful software.
                        Streamline tasks, collaborate efficiently, and deliver projects on time and within budget.
                        Our software offers a comprehensive suite of features designed to boost productivity and
                        enhance team performance.</p>
                </div>
                <ul>
                    <li>
                        Task Management: Create, assign, and track tasks with ease. Set due dates, priorities, and
                        dependencies.
                    </li>
                    <li>
                        Project Planning: Develop detailed project plans, visualize timelines, and allocate resources
                        effectively.
                    </li>
                    <li>
                        Collaboration Tools: Foster teamwork with real-time communication, file sharing, and version
                        control.
                    </li>
                    <li>
                        Time Tracking: Accurately monitor time spent on tasks and projects for improved resource
                        allocation.
                    </li>
                    <li>
                        Reporting and Analytics: Gain valuable insights into project performance with customizable
                        reports.
                    </li>
                </ul>
                <h1 className={'text-center my-3'}>Try all our products for free during training!</h1>
                <div className="pricing-plans">
                    <PricingPlans></PricingPlans>
                </div>
            </Container>
        </div>
    )
}