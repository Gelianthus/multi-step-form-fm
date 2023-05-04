

function StepIndicator ({step}) {

    const activeBG = {
        backgroundColor: "hsl(206, 94%, 87%)",
        color: "hsl(213, 96%, 18%)",
        borderColor: "hsl(206, 94%, 87%)"
    }

    const inactiveBG = {
        backgroundColor: "transparent",
        color: "hsl(0, 0%, 100%)"
    }

    return (
        <div className="step-indicator-bar">
            <ul>
                <li>     
                    <p className="step-number" style={step === 1 ? activeBG : inactiveBG}>1</p>
                    <div className="step-details">
                        <p>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                </li>
                <li>
                    <p className="step-number" style={step === 2 ? activeBG : inactiveBG}>2</p>
                    <div className="step-details">
                        <p>STEP 2</p>
                        <p>SELECT PLAN</p>
                    </div>
                </li>
                <li>
                    <p className="step-number" style={step === 3 ? activeBG : inactiveBG}>3</p>
                    <div className="step-details">
                        <p>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                </li>
                <li>
                    <p className="step-number" style={step === 4 ? activeBG : inactiveBG}>4</p>
                    <div className="step-details">
                        <p>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default StepIndicator;
