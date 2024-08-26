import Basic from "./Basic";
import Standard from "./Standard";
import Enterprise from "./Enterprise";
import Customize from "./Customize";

export default function PricingPlans() {
    return(
        <div>
            <Basic></Basic>
            <Standard></Standard>
            <Enterprise></Enterprise>
            <Customize></Customize>
        </div>
    )
}