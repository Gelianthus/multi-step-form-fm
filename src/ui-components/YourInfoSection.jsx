import { useState, useRef } from "react";

function YourInfoSection ({ setStep }) {

    const [ user, setUser ] = useState({name: "", email: "", number: ""});

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const nameWrapperRef = useRef(null);
    const emailWrapperRef = useRef(null);
    const numberWrapperRef = useRef(null);

    const submitInfo = () => {
        const emptyInfo = [];
        
        for (const info  in user) {
            if (user.hasOwnProperty(info)) {
                if (user[info] === "") {
                    emptyInfo.push(info);
                }
            }
        }
        
        if (emptyInfo.length > 0) {
            if(nameRef.current.value === "") {
                nameWrapperRef.current.classList.add("empty-field");
                setTimeout(() => {
                    nameWrapperRef.current.classList.remove("empty-field");
                }, 3000);
                nameRef.current.style.border = "solid 2px hsl(354, 84%, 57%)";
                setTimeout(() => {
                    nameRef.current.style.border = "solid 2px hsl(229, 24%, 87%)";
                }, 3000)
            }
            if(emailRef.current.value === "") {
                emailWrapperRef.current.classList.add("empty-field");
                setTimeout(() => {
                    emailWrapperRef.current.classList.remove("empty-field");
                }, 3000);
                emailRef.current.style.border = "solid 2px hsl(354, 84%, 57%)";
                setTimeout(() => {
                    emailRef.current.style.border = "solid 2px hsl(229, 24%, 87%)";
                }, 3000)
            }
            if(numberRef.current.value === "") {
                numberWrapperRef.current.classList.add("empty-field");
                setTimeout(() => {
                    numberWrapperRef.current.classList.remove("empty-field");
                }, 3000);
                numberRef.current.style.border = "solid 2px hsl(354, 84%, 57%)";
                setTimeout(() => {
                    numberRef.current.style.border = "solid 2px hsl(229, 24%, 87%)";
                }, 3000)
            }
        } else {
            setStep((prevStep) => prevStep + 1);
        }
    }

    return (
        <>
        <section className="your-info-section ui-section">
            <header>
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </header>
            <div className="user-info-form step-content">
                <div ref={nameWrapperRef} className="input-wrapper">
                    <label htmlFor="nameID">Name</label>
                    <input placeholder="e.g. Stephen King" className="info-input" ref={nameRef} id="nameID" type="text" onChange={(e) => setUser((prevUser) => {
	                return {...prevUser, name: e.target.value}
                    })}/>
                </div>
                <div ref={emailWrapperRef} className="input-wrapper">
                    <label htmlFor="emailID">Email Address</label>
                    <input placeholder="e.g. stephenking@lorem.com" className="info-input" ref={emailRef} id="emailID" type="email" onChange={(e) => setUser((prevUser) => {
	                return {...prevUser, email: e.target.value}
                    })} />
                </div>
                <div ref={numberWrapperRef} className="input-wrapper">
                    <label htmlFor="numberID">Phone Number</label>
                    <input placeholder="e.g. +1 234 567 890" className="info-input" ref={numberRef} id="numberID" type="number" onChange={(e) => 
                    setUser((prevUser) => {
	                return {...prevUser, number: e.target.value}
                    })}/>
                </div>
            </div>
            <div className="button-container button-placement-a">
                <button onClick={submitInfo} className="next-button">Next Step</button>
            </div>
        </section>
        <div className="button-container-mobile button-placement-a">
            <button onClick={submitInfo} className="next-button">Next Step</button>
        </div>
        </>
    )
}

export default YourInfoSection;