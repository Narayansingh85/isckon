import axios from 'axios';
import {
    CREATE_NEW_REGISTRATION,
    FETCH_VOLUNTEER_LIST,
} from '../constants';

const BASE_URL = window && window.origin && window.origin.contains('iyfghaziabad') ? 'https://iyfapi.herokuapp.com' : 'http://localhost:8080';

export const createNewRegistration = (userDetails) => {
    return axios.post(BASE_URL + CREATE_NEW_REGISTRATION, userDetails);
}

export const fetchVolunteerList = () => {
    return axios.get(BASE_URL + FETCH_VOLUNTEER_LIST);
}