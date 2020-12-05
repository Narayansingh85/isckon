import React from 'react';
import logo from '../../assets/images/logo.jpg';
import './style.scss';

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
        this.handleScrollToElement();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }

    handleScrollToElement = () => {
        //something
        // this.handleHeader(window.scrollY, window.innerWidth);
        // this.handleHeaderBg(window.scrollY);
    };

    render() {
        return (
            <div className="header-container">
                <img className="logo" src={logo} />
                <ul>
                    <li>Let's talk Practical</li>
                </ul>
            </div>
        )
    }
}

export default Header;