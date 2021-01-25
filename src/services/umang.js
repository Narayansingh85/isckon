import axios from 'axios';
import {
    CREATE_NEW_REGISTRATION,
    FETCH_ALL_USERS,
    FETCH_VOLUNTEER_LIST,
    MARK_ATTENDANCE,
    UPDATE_USER,
} from '../constants';

const BASE_URL = 'https://iyfapi.herokuapp.com';

export const createNewRegistration = (userDetails) => {
    return axios.post(BASE_URL + CREATE_NEW_REGISTRATION, userDetails);
}

export const fetchVolunteerList = () => {
    return axios.get(BASE_URL + FETCH_VOLUNTEER_LIST);
}

export const fetchAllRegistrations = () => {
    return axios.get(BASE_URL + FETCH_ALL_USERS);
}

export const markAttendance = (id, isPresent) => {
    return axios.put(BASE_URL + MARK_ATTENDANCE + `/${id}`, {
        isPresent
    });
}

export const updateUser = (user) => {
    return axios.post(BASE_URL + UPDATE_USER, user);
}