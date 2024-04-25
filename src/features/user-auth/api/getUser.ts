import axios from 'axios';

import { AuthUser } from '../types';

export const getUser = (): Promise<AuthUser> => {
    return axios.get(`${process.env.REACT_APP_API_URI}/user/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};
