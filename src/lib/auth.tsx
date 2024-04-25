/* Using the `react-query-auth` library to handle a lot of the user authentication */
// All the code below is to set up the authentication for the library

import { configureAuth } from 'react-query-auth';
import {
    loginWithEmailAndPassword,
    getUser,
    registerUser,
    LoginCredentialsDTO,
    RegisterCredentialsDTO,
    UserResponse,
} from '@/features/user-auth';
import { AxiosResponse } from 'axios';
import storage from '@/utils/storage';

const handleResponse = async (response: AxiosResponse<UserResponse>) => {
    const { token, user } = response.data;
    console.log(token, user);
    storage.setToken(token);

    return user;
};

const userFn = async () => {
    if (storage.getToken()) {
        const data = await getUser();
        return data;
    }

    return null;
};

const loginFn = async (data: LoginCredentialsDTO) => {
    const response = await loginWithEmailAndPassword(data);
    const user = await handleResponse(response);

    return user;
};

const registerFn = async (data: RegisterCredentialsDTO) => {
    const response = await registerUser(data);
    const user = await handleResponse(response);

    return user;
};

const logoutFn = async () => {
    storage.clearToken();
    window.location.assign(window.location.origin as unknown as string);
};

// Configurations for the `react-query-auth` library
const authConfig = {
    userFn,
    loginFn,
    registerFn,
    logoutFn,
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(authConfig);
