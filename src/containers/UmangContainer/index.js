import React from 'react';
import RoundBtn from '../../components/RoundBtn';
import './style.scss';

class UmangContainer extends React.Component {
    render() {
        return (
            <div className="umang-landing-page">
                <div className="banner">
                    <iframe id="video_background_video_0_yt" allowFullScreen="allowfullscreen" width="1284" height="723" src="https://www.youtube.com/embed/9a5a4n54gJU?enablejsapi=1&amp;loop=1&amp;start=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;wmode=transparent&amp;iv_load_policy=3&amp;modestbranding=1&amp;rel=0&amp;mute=1&amp;playlist=9a5a4n54gJU" frameBorder="0" ></iframe>
                    <div className="banner-overlay">
                        <div className="title">UMANG</div>
                        <div className="line-1">Festival of Goodness and Joy</div>
                        <div className="line-2">26 January 2021 / ISKCON GHAZIABAD / 3 PM ONWARDS</div>
                        <a href="https://www.payumoney.com/events/#/buyTickets/umang"
                            target="_blank">
                            <RoundBtn
                                bgColor="#FFFFFF"
                                textColor="#222222"
                            >
                                Register Now
                            </RoundBtn>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UmangContainer;