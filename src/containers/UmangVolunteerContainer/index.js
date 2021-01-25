import React from 'react';
import Input from '../../components/Input';
import RoundBtn from '../../components/RoundBtn';
import { createNewRegistration, fetchVolunteerList } from '../../services/umang';
import COLORS from '../../constants/colors';
import './style.scss';

class UmangVolunteerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: '',
            location: '',
            remarks: '',
            withBhagavadGita: false,
            moneyPaid: '',
            registeredBy: '0',
            registeredBy2: undefined,
            volunteers: ['OTHER'],
            institute: '',
        }
    }

    componentDidMount = () => {
        fetchVolunteerList().then(res => {
            const volunteers = res.data;
            this.setState({
                volunteers: [...volunteers, 'OTHER'],
            });
        });
    }

    setFormData = (name, value) => {
        if (name === 'registeredBy' && value === 'OTHER') {
            this.setState({
                registeredBy2: '',
                [name]: value,
            });
        } else {
            this.setState({
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
            volunteers,
            remarks,
            withBhagavadGita,
            moneyPaid,
            institute,
        } = this.state;
        if (name
            && email
            && contact
            && location
            && registeredBy
            && ((registeredBy === 'OTHER' && registeredBy2) || registeredBy !== 'OTHER')) {
            createNewRegistration({
                name,
                email,
                contact,
                location,
                remarks,
                withBhagavadGita,
                moneyPaid: moneyPaid || 0,
                registeredBy: registeredBy2 || registeredBy,
                registeredBy2: undefined,
                institute,
            }).then(res => {
                this.setState({
                    name: '',
                    email: '',
                    contact: '',
                    location: '',
                    remarks: '',
                    withBhagavadGita: false,
                    moneyPaid: '',
                    registeredBy: '0',
                    registeredBy2: undefined,
                    institute: '',
                });
                alert(res.data);
            }).catch(e => {
                alert("Error:", e.message);
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
            volunteers,
            remarks,
            moneyPaid,
            withBhagavadGita,
            institute,
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
                        type="number"
                        maxLength="10"
                        required
                    />
                    <Input
                        placeholder={'Email'}
                        setValue={this.setFormData}
                        value={email}
                        name="email"
                        type="email"
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
                        placeholder={'Amount Received'}
                        setValue={this.setFormData}
                        value={moneyPaid}
                        name="moneyPaid"
                        type="number"
                        maxLength="4"
                    />
                    <Input
                        placeholder={'With Bhagavad Gita'}
                        setValue={this.setFormData}
                        value={withBhagavadGita}
                        name="withBhagavadGita"
                        type="checkbox"
                        required
                    />
                    <Input
                        placeholder={'Registered by'}
                        setValue={this.setFormData}
                        value={registeredBy}
                        name="registeredBy"
                        type="select"
                        options={volunteers}
                        className="full input"
                        required
                    />
                    {registeredBy === 'OTHER' && <Input
                        placeholder={'Registered by'}
                        setValue={this.setFormData}
                        value={registeredBy2}
                        name="registeredBy2"
                        required
                    />}
                    <Input
                        placeholder={'Institute'}
                        setValue={this.setFormData}
                        value={institute}
                        name="institute"
                    />
                    <Input
                        placeholder={'Remarks'}
                        setValue={this.setFormData}
                        value={remarks}
                        name="remarks"
                    />
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
                    <div className="note">
                        Please put your full name in <strong>Registered By</strong> field. ISKCON YOUTH FORUM GHAZIABAD holds the right to cancel the registration, if any discrepancies found.
                    </div>
                </div>
            </div>
        )
    }
}

export default UmangVolunteerContainer;