import axios from "axios";

import { UserResponse } from "../types";

// RegisterCredentialsDTO = Register Credentials Data Transfer Object
// This is the data that will be sent to the server when registering a new user
export type RegisterCredentialsDTO = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
};

export const registerUser = (
    data: RegisterCredentialsDTO
): Promise<UserResponse> => {
    return axios.post(
        `${process.env.REACT_APP_API_URI}/user/register-user`,
        data
    );
};
