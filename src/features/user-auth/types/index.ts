export type AuthUser = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    lvl: number;
    role: "ADMIN" | "USER";
};

export type UserResponse = {
    jwt: string;
    user: AuthUser;
};
