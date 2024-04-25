import axios, { AxiosResponse } from 'axios';

import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
    email: string;
    password: string;
};

export const loginWithEmailAndPassword = (
    data: LoginCredentialsDTO
): Promise<AxiosResponse<UserResponse>> => {
    return axios.post(`${process.env.REACT_APP_API_URI}/user/login`, data);
};
