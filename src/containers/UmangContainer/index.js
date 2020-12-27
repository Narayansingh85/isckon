import React from 'react';
import Input from '../../components/Input';
import RoundBtn from '../../components/RoundBtn';
import { createNewRegistration } from '../../services/umang';
import COLORS from '../../constants/colors';
import './style.scss';

class UmangContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: '',
            location: '',
            registeredBy: '',
            registeredBy2: undefined
        }
    }

    setFormData = (name, value) => {
        if (name === 'registeredBy' && value === 'OTHER') {
            this.setState({
                registeredBy2: '',
                [name]: value,
            });
        } else {
            this.setState({
                registeredBy2: undefined,
                [name]: value,
            });
        }
    }
    register = () => {
        const {
            name,
            email,
            contact,
            location,
            registeredBy,
            registeredBy2,
        } = this.state;
        if (name
            && email
            && contact
            && location
            && registeredBy) {
            createNewRegistration({
                ...this.state,
                registeredBy: registeredBy2 || registeredBy,
                registeredBy2: undefined
            }).then(res => {
                alert('Details saved successfully!')
            }).catch(e => {
                alert("error occured:", e);
            })
        } else {
            alert("Please fill details");
        }
    }

    render() {
        const {
            name,
            email,
            contact,
            location,
            registeredBy,
            registeredBy2,
        } = this.state;
        return (
            <div className="umang-container">
                <h1>UMANG REGISTRATION</h1>
                <div className="form">
                    <Input
                        placeholder={'Name'}
                        setValue={this.setFormData}
                        value={name}
                        name="name"
                        required
                    />
                    <Input
                        placeholder={'Contact'}
                        setValue={this.setFormData}
                        value={contact}
                        name="contact"
                        required
                    />
                    <Input
                        placeholder={'Email'}
                        setValue={this.setFormData}
                        value={email}
                        name="email"
                        required
                    />
                    <Input
                        placeholder={'Location'}
                        setValue={this.setFormData}
                        value={location}
                        name="location"
                        required
                    />
                    <Input
                        placeholder={'Registered by'}
                        setValue={this.setFormData}
                        value={registeredBy}
                        name="registeredBy"
                        type="select"
                        options={[
                            'HARSH SAXENA',
                            'DEEP SHUBHANJAY',
                            'SAHIL VERMA',
                            'ANUJ RUHELA',
                            'RAVI GARG',
                            'OTHER'
                        ]}
                        className="full input"
                        required
                    />
                    {typeof registeredBy2 === 'string' && <Input
                        placeholder={'Registered by'}
                        setValue={this.setFormData}
                        value={registeredBy2}
                        name="registeredBy2"
                        required
                    />}
                    <RoundBtn
                        className="btn selector-btn"
                        onClick={this.register}
                        outlineColor={COLORS.YELLOW}
                        textColor={COLORS.WHITE}
                        bgColor={COLORS.YELLOW}
                        outlinePt={2}
                    >
                        Register
                    </RoundBtn>
                </div>
            </div>
        )
    }
}

export default UmangContainer;