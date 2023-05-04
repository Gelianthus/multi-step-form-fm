import StepIndicator from "./StepIndicator";
import { useState, useEffect } from "react";
import YourInfoSection from "./ui-components/YourInfoSection";
import SelectPlanSection from "./ui-components/SelectPlanSection";
import AddOnsSection from "./ui-components/AddOnsSection";
import SummarySection from "./ui-components/SummarySection";
import ConfirmationSection from "./ui-components/ConfirmationSection";


function MultiStepForm () {

    const [ step, setStep ] = useState(1);
    const [ plan, setPlan ] = useState({plan_type: "Arcade", price: 9 });
    const [ isMonthly, setIsMonthly ] = useState(true);
    const [ addOns, setAddOns ] = useState({online_service: false, larger_storage: false, customizable_profile: false});

    return (
        <div className="new-body">
            <div className="multi-step-form">
                <StepIndicator step={step} />
                <main>
                    {step === 1 ? <YourInfoSection setStep={setStep} /> :
                    step === 2 ? <SelectPlanSection setStep={setStep} isMonthly={isMonthly} setIsMonthly=   {setIsMonthly} setPlan={setPlan} /> :
                    step === 3 ? <AddOnsSection setStep={setStep} isMonthly={isMonthly} setAddOns={setAddOns} addOns=   {addOns} /> :
                    step === 4 ? <SummarySection setStep={setStep} plan={plan} isMonthly={isMonthly} addOns={addOns}    setAddOns={setAddOns} /> :
                    step === 5 ? <ConfirmationSection/> : setStep(1)}
                </main>
            </div>
        </div>
    )
}

export default MultiStepForm;