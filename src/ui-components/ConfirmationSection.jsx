import bigCheck from "../images/icon-thank-you.svg";

function ConfirmationSection () {

    return (
        <section className="confirmation-section ui-section">
            <div className="confirmation-image-wrapper">
                <img src={bigCheck} alt="big check" />
            </div>
            <h1>Thank you!</h1>
            <p className="confirmation-text">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, feel free to email us at support@lorem.com.</p>
        </section>
    )
}

export default ConfirmationSection;