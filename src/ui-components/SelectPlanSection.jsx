import { useRef} from "react";
import arcadeImg from "../images/icon-arcade.svg";
import advancedImg from "../images/icon-advanced.svg";
import proImg from "../images/icon-pro.svg";

function SelectPlanSection ({ setStep, isMonthly, setIsMonthly, setPlan }) {

    const arcadeCardRef = useRef(null);
    const advancedCardRef = useRef(null);
    const proCardRef = useRef(null);

    const selectPlan = (subscriptionType, subscriptionPrice) => {
        setPlan({plan_type: subscriptionType, price: subscriptionPrice});
        if (subscriptionType === "Arcade") {
            arcadeCardRef.current.classList.add("selected-card");
            advancedCardRef.current.classList.remove("selected-card");
            proCardRef.current.classList.remove("selected-card");
        } else if (subscriptionType === "Advanced") {
            advancedCardRef.current.classList.add("selected-card");
            arcadeCardRef.current.classList.remove("selected-card");
            proCardRef.current.classList.remove("selected-card");
        } else {
            proCardRef.current.classList.add("selected-card");
            arcadeCardRef.current.classList.remove("selected-card");
            advancedCardRef.current.classList.remove("selected-card");
        }
    }

    return (
        <>
        <section className="select-plan-section ui-section">
            <header>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </header>
            <div className="plan-selector step-content">
                <div className="subscription-options">
                    <div ref={arcadeCardRef} className="subscription-card selected-card" onClick={() => selectPlan("Arcade", 9)}>
                        <div className="subscription-icon-wrapper">
                            <img src={arcadeImg} alt="arcade gaming icon"/>
                        </div>
                        <div className="card-details">
                            <p className="card-title">Arcade</p>
                            <p className="card-price">{`${isMonthly ? "$9/mo" : "$90/yr"}`}</p>
                            <p className={`card-bonus ${isMonthly ? "not-viable" : ""}`}>2 months free</p>
                        </div>
                    </div>
                    <div ref={advancedCardRef} className="subscription-card" onClick={() => selectPlan("Advanced", 12)}>
                        <div className="subscription-icon-wrapper">
                            <img src={advancedImg} alt="advanced gaming icon"/>
                        </div>
                        <div className="card-details">
                            <p className="card-title">Advanced</p>
                            <p className="card-price">{`${isMonthly ? "$12/mo" : "$120/yr"}`}</p>
                            <p className={`card-bonus ${isMonthly ? "not-viable" : ""}`}>2 months free</p>
                        </div>
                    </div>
                    <div ref={proCardRef} className="subscription-card" onClick={() => selectPlan("Pro", 15)}>
                        <div className="subscription-icon-wrapper">
                            <img src={proImg} alt="pro gaming icon"/>
                        </div>
                        <div className="card-details">
                            <p className="card-title">Pro</p>
                            <p className="card-price">{`${isMonthly ? "$15/mo" : "$150/yr"}`}</p>
                            <p className={`card-bonus ${isMonthly ? "not-viable" : ""}`}>2 months free</p>
                        </div>
                    </div>
                </div>
                <div className="billing-options">
                    <span>Monthly</span>
                    <div className="circle-container" onClick={() => setIsMonthly(prevState => !prevState)}>
                        <div className="circle"  style={isMonthly ? {left: "10%"} : {right: "10%"}}></div>
                    </div>
                    <span>Yearly</span>
                </div>
            </div>
            <div className="button-container button-placement-c">
                <button className="prev-button" onClick={() => setStep((prevStep) => prevStep - 1)}>Go Back</button>
                <button className="next-button" onClick={() => setStep((prevStep) => prevStep + 1)}>Next Step</button>
            </div>
        </section>
        <div className="button-container-mobile button-placement-c">
            <button className="prev-button" onClick={() => setStep((prevStep) => prevStep - 1)}>Go Back</button>
            <button className="next-button" onClick={() => setStep((prevStep) => prevStep + 1)}>Next Step</button>
        </div>
        </>
    )
}

export default SelectPlanSection;