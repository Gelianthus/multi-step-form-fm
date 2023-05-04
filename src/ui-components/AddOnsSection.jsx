

function AddOnsSection ({ setStep, isMonthly, setAddOns, addOns }) {

    const checkedAddOns = {
        backgroundColor: "hsl(217, 100%, 97%)",
        borderColor: "hsl(243, 100%, 62%)"
    };

    const notCheckedAddOns = {
        backgroundColor: "transparent"
    };

    const prevButtonHandle = () => {
        setAddOns({online_service: false, larger_storage: false, customizable_profile: false});
        setStep((prevStep) => prevStep - 1)
    }
    

    return (
        <>
        <section className="add-ons-section ui-section">
            <header>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </header>
            <div className="add-ons-selector step-content">
                <div className="add-ons-option" style={addOns.online_service ? checkedAddOns : notCheckedAddOns}>
                    <div className="add-ons-input-wrapper">
                        <input onClick={() => setAddOns({...addOns, online_service: !addOns.online_service})} id="addOns1" type="checkbox" />
                        <label htmlFor="addOns1">
                            <p className="add-ons-type">Online service</p>
                            <p className="add-ons-detail">Access to multiplayer games</p>
                        </label>
                    </div>
                    <p className="add-ons-price">{isMonthly ? "+1$/mo" : "+10/yr"}</p>
                </div>
                <div className="add-ons-option" style={addOns.larger_storage ? checkedAddOns : notCheckedAddOns}>
                    <div className="add-ons-input-wrapper">
                        <input onClick={() => setAddOns({...addOns, larger_storage: !addOns.larger_storage})} id="addOns2" type="checkbox" />
                        <label htmlFor="addOns2">
                            <p className="add-ons-type">Larger storage</p>
                            <p className="add-ons-detail">Extra 1TB of cloud save</p>
                        </label>
                    </div>
                    <p className="add-ons-price">{isMonthly ? "+$2/mo" : "+$20/yr"}</p>
                </div>
                <div className="add-ons-option" style={addOns.customizable_profile ? checkedAddOns : notCheckedAddOns}>
                    <div className="add-ons-input-wrapper">
                        <input onClick={() => setAddOns({...addOns, customizable_profile: !addOns.customizable_profile})} id="addOns3" type="checkbox" />
                        <label htmlFor="addOns3">
                            <p className="add-ons-type">Customizable profile</p>
                            <p className="add-ons-detail">Custom theme on your profile</p>
                        </label>
                    </div>
                    <p className="add-ons-price">{isMonthly ? "+$2/mo" : "+$20/yr"}</p>
                </div>
            </div>
            <div className="button-container button-placement-c">
                <button className="prev-button" onClick={prevButtonHandle}>Go Back</button>
                <button className="next-button" onClick={() => setStep((prevStep) => prevStep + 1)}>Next Step</button>
            </div>
        </section>
        <div className="button-container-mobile button-placement-c">
            <button className="prev-button" onClick={prevButtonHandle}>Go Back</button>
            <button className="next-button" onClick={() => setStep((prevStep) => prevStep + 1)}>Next Step</button>
        </div>
        </>
    )
}

export default AddOnsSection;