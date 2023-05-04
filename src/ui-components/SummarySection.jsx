

function SummarySection ({ setStep, plan, isMonthly, addOns, setAddOns }) {

    const addOnsTotal = () => {
        let total = 0;
        if (addOns.online_service) {
            total += 1;
        }
        if (addOns.larger_storage) {
            total += 2;
        }
        if (addOns.customizable_profile) {
            total += 2;
        }
        return total;
    }

    const changeBilling = () => {
        setAddOns({online_service: false, larger_storage: false, customizable_profile: false});
        setStep(2);
    }

    const prevButtonHandle = () => {
        setAddOns({online_service: false, larger_storage: false, customizable_profile: false});
        setStep((prevStep) => prevStep - 1);
    }

    const hrVisibility = () => {
        const trueAddOn = [];
        for (const addOn in addOns) {
             if (addOns[addOn] === true) {
                trueAddOn.push(addOns[addOn]);
            }
        }
        return trueAddOn;
    }

    return (
        <>
        <section className="summary-section ui-section">
            <header>
                <h1>Finishing Up</h1>
                <p>Double-check everything looks OK before confirming</p>
            </header>
            <div className="summary step-content">
                <div className="subscription-summary">
                    <div className="plan-summary">
                        <div>
                            <p className="summary-plan-type">{`${plan.plan_type} (${isMonthly ? "Monthly" : "Yearly"})`}</p>
                            <button className="change-plan-button" onClick={changeBilling}>Change</button>
                        </div>
                        <p className="plan-cost">{`$${isMonthly ? plan.price : plan.price * 10}/${isMonthly ? "mo" : "yr"}`}</p>
                    </div>
                    <div className="hr-line" style={hrVisibility().length > 0 ? {display: "block"} : {display: "none"}}></div>
                    <div className="add-ons-summary">
                        {addOns.online_service && <div className="add-ons">
                            <p className="summary-add-ons-type">Online Service</p>
                            <p className="add-ons-cost">{isMonthly ? "$1/mo" : "$10/yr"}</p>
                        </div>}
                        {addOns.larger_storage && <div className="add-ons">
                            <p className="summary-add-ons-type">Larger Storage</p>
                            <p className="add-ons-cost">{isMonthly ? "$2/mo" : "$20/yr"}</p>
                        </div>}
                        {addOns.customizable_profile && <div className="add-ons">
                            <p className="summary-add-ons-type">Customizable Profile</p>
                            <p className="add-ons-cost">{isMonthly ? "$2/mo" : "$20/yr"}</p>
                        </div>}
                    </div>
                </div>
                <div className="total-cost">
                    <p className="total-cost-detail">Total (per {`${isMonthly ? "month" : "year"}`})</p>
                    <p className="total-cost-amount">{`+$${isMonthly ? plan.price + addOnsTotal() : plan.price * 10 + addOnsTotal() * 10}/${isMonthly ? "mo" : "yr"}`}</p>
                </div>
            </div>
            <div className="button-container button-placement-c">
                <button className="prev-button" onClick={prevButtonHandle}>Go Back</button>
                <button className="next-button confirm-button" onClick={() => setStep((prevStep) => prevStep + 1)}>Confirm</button>
            </div>
        </section>
        <div className="button-container-mobile button-placement-c">
            <button className="prev-button" onClick={prevButtonHandle}>Go Back</button>
            <button className="next-button confirm-button" onClick={() => setStep((prevStep) => prevStep + 1)}>Confirm</button>
        </div>
        </>
    )
}

export default SummarySection;