import axios, { AxiosResponse } from 'axios';

import { SMS, SMSResponse } from '../types';

export const getSMS = async (difficulty: number): Promise<SMS[]> => {
    const response: AxiosResponse<SMSResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/sms?difficulty=${difficulty}`
    );

    return response.data.smsData;
};
