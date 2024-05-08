export type AuthUser = {
    userId: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
};

export type UserResponse = {
    token: string;
    user: AuthUser;
};
