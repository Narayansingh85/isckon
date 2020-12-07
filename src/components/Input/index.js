import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import COLORS from '../../constants/colors';
import { placeholder } from '@babel/types';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColor: COLORS.DARK,
        }
    }
    onFocusIn = () => {
        this.setState({
            borderColor: COLORS.BLACK,
        })
    }

    onFocusOut = () => {
        if (this.checkTests()) {
            //somethhing error
            this.setState({
                borderColor: COLORS.RED
            });
        } else {
            this.setState({
                borderColor: COLORS.DARK
            })
        }
    }

    checkTests = () => {
        const {
            required,
            test,
            value,
        } = this.props;
        if (required && !value) {
            return true;
        } else if (test) {
            console.log(test, test.test(value), value)
            return !test.test(value);
        }
        return false;
    }
    render() {
        const {
            value,
            setValue,
            required,
            className,
            name,
            placeholder,
            type,
            options,
            maxlength,
        } = this.props;
        const {
            borderColor
        } = this.state;
        return (
            <React.Fragment>
                {type === 'select' && (
                    <select
                        className={`input-container ${className ? className : ''}`}
                        style={{ borderColor }}
                        name={name}
                        value={value}
                        onFocus={this.onFocusIn}
                        onBlur={this.onFocusOut}
                        placeholder={placeholder}
                        onChange={(e) => setValue(name, e.target.value)}
                    >
                        {options.map(opt => {
                            return (
                                <option value={typeof (opt) === 'string' ? opt : opt.value}>
                                    {typeof (opt) === 'string' ? opt : opt.label}
                                </option>
                            )
                        })}
                    </select>
                )}
                {(type === 'text' || type === 'date' || type === 'number') && (
                    <input
                        className={`input-container ${className ? className : ''}`}
                        style={{ borderColor }}
                        name={name}
                        value={value}
                        onFocus={this.onFocusIn}
                        onBlur={this.onFocusOut}
                        placeholder={placeholder}
                        onChange={(e) => setValue(name, e.target.value)}
                        maxlength={maxlength}
                        type={type}
                    />
                )}
                {(type === 'radio') && (
                    <div className="radio">
                        {
                            options.map((option, index) => (
                                <div className={className}>
                                    <input
                                        className={`input-container`}
                                        name={name}
                                        value={option}
                                        onChange={(e) => setValue(name, e.target.value)}
                                        type={type}
                                        checked={option === value}
                                    />
                                    <label for={name}>{option}</label>
                                </div>
                            ))
                        }
                    </div>
                )}
                {(type === 'file') && (
                    <button id="upload_widget" class="cloudinary-button">Upload files</button>
                )}
            </React.Fragment>

        )
    }
}

Input.propTypes = {
    type: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
}

export default Input;