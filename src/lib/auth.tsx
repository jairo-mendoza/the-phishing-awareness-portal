/* Using the `react-query-auth` library to handle a lot of the user authentication */
// All the code below is to set up the authentication for the library

import { configureAuth } from 'react-query-auth';
import {
    loginWithEmailAndPassword,
    registerUser,
    requestForUser,
    LoginCredentialsDTO,
    RegisterCredentialsDTO,
    UserResponse,
    AuthUser,
} from '@/features/user-auth';
import { AxiosResponse } from 'axios';
import storage from '@/utils/storage';
import { useUserStore } from '@/utils/userStore';

const handleResponse = async (response: AxiosResponse<UserResponse>) => {
    // Axios does adds an extra `data` property to the response
    const { token, user } = response.data;
    storage.setToken(token);

    // Set the auth user in the store
    // This way, we can access the auth user data from anywhere in the app
    useUserStore.getState().setUser(user);

    return user;
};

const userFn = async (): Promise<AuthUser | null> => {
    if (storage.getToken()) {
        const response = await requestForUser();
        return response.data.user;
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
