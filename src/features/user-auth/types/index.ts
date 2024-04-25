/* Models for what to receive from backend */
export type AuthUser = {
    data: {
        userName: string;
        email: string;
        firstName: string;
        lastName: string;
    };
};

export type UserResponse = {
    token: string;
    user: AuthUser;
};
