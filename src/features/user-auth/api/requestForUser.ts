import axios, { AxiosResponse } from 'axios';

export const requestForUser = (): Promise<AxiosResponse> => {
    return axios.get(`${process.env.REACT_APP_API_URI}/user/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};
