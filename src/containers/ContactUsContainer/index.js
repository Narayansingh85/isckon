import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import './style.scss';

class ContactUsContainer extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <Header />
                <Banner
                        color="#365E7D"
                        image="https://res.cloudinary.com/dnuq1lgqs/image/upload/v1607155380/bg/Rectangle_44_ayb303.jpg"
                        title="We're listening!"
                    />
            </div>
        )
    }
}

export default ContactUsContainer;