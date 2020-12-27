import axios from 'axios';
import {
    CREATE_NEW_REGISTRATION,
    FETCH_VOLUNTEER_LIST,
} from '../constants';

export const createNewRegistration = (userDetails) => {
    console.log(userDetails);
    return axios.post(CREATE_NEW_REGISTRATION, userDetails);
}

export const fetchVolunteerList = () => {
    return axios.get(FETCH_VOLUNTEER_LIST);
}