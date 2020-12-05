import React from 'react';
import logo from '../../assets/images/logo.jpg';
import './style.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nightify: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
        this.handleScrollToElement();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }

    handleScrollToElement = () => {
        const {
            nightify
        } = this.state;
        const banner = document.getElementById('banner-container');
        const bannerHeight = (banner && banner.offsetHeight) || 0;
        if (window.scrollY > bannerHeight && !nightify) {
            this.setState({
                nightify: true
            })
        } else if (window.scrollY <= bannerHeight && nightify) {
            this.setState({
                nightify: false,
            })
        }
    };

    render() {
        const {
            nightify,
        } = this.state;
        const {
            bgColor
        } = this.props;
        return (
            <div className={`header-container ${nightify ? 'nightify' : ''}`}
                style={{ backgroundColor: bgColor }}
            >
                <img className="logo" src={logo} />
                <ul>
                    <li>Let's talk Practical</li>
                </ul>
            </div>
        )
    }
}

export default Header;