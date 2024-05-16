/* This gets both emails and sms */
import axios, { AxiosResponse } from 'axios';

import { AllCommResponse, Email, SMS } from '../types';

export const getAll = async (difficulty: string): Promise<(Email | SMS)[]> => {
    const response: AxiosResponse<AllCommResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/all-comm?difficulty=${difficulty}`
    );

    return response.data.data;
};
