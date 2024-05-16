import axios, { AxiosResponse } from 'axios';

import { Email, EmailResponse } from '../types';

export const getEmail = async (difficulty: number): Promise<Email[]> => {
    const response: AxiosResponse<EmailResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/email?difficulty=${difficulty}`
    );

    return response.data.emailData;
};
