import React from 'react';
import '../../../styles/features.css'

const Features = () => {
    return (
        <>
            <div className="features-container">
                <div>
                    <p className="feature-title">FASTED DELIVERY</p>
                    <p className="feature-sub">Delivery in 24/H</p>
                </div>
                <div>
                    <p className="feature-title">24 HOURS RETURN</p>
                    <p className="feature-sub">100% money-back guarantee</p>
                </div>
                <div>
                    <p className="feature-title">SECURE PAYMENT</p>
                    <p className="feature-sub">Your money is safe</p>
                </div>
                <div>
                    <p className="feature-title">SUPPORT 24/7</p>
                    <p className="feature-sub">Live contact/message</p>
                </div>
            </div>
        </>
    )
}

export default Features