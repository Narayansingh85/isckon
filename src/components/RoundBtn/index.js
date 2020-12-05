import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../constants/colors';
import './style.scss';

class RoundBtn extends React.Component {
    constructor(props) {
        super(props);
        const {
            textColor,
            bgColor,
            hoverBgColor,
            hoverTextColor,
            outlineColor,
            outlinePt,
        } = this.props;
        this.state = {
            textColor,
            bgColor,
            outlineColor,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.bgColor !== this.props.bgColor){
            this.setState({
                bgColor: this.props.bgColor,
            })
        }
    }

    onMouseEnter = () => {
        const {
            hoverTextColor,
            hoverBgColor,
        } = this.props;
        const changed = {};
        if (hoverBgColor) {
            changed.bgColor = hoverBgColor;
        }
        if (hoverTextColor) {
            changed.textColor = hoverTextColor;
        }
        this.setState(changed);
    }

    onMouseLeave = () => {
        const {
            textColor,
            bgColor,
        } = this.props;
        this.setState({
            textColor,
            bgColor,
        });
    }

    render() {
        const {
            className,
            children,
            outlineColor,
            outlinePt,
            onClick,
        } = this.props;
        const {
            bgColor,
            textColor,
        } = this.state;
        return (
            <button
                onClick={onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                className={`${className} round-btn`}
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    border: `${outlinePt}px solid ${outlineColor}`
                }}
            >
                {children}
            </button>
        )
    }
}

RoundBtn.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    outlineColor: PropTypes.string,
    outlinePt: PropTypes.number,
}

RoundBtn.defaultProps = {
    className: '',
    children: null,
    textColor: COLORS.WHITE,
    bgColor: COLORS.DARK,
    hoverBgColor: '',
    hoverTextColor: '',
    outlineColor: COLORS.DARK,
    outlinePt: 0,
}

export default RoundBtn;