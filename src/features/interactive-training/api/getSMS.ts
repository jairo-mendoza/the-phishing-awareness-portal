import axios, { AxiosResponse } from 'axios';

import { SMS, SMSResponse } from '../types';

export const getSMS = async (difficulty: string): Promise<SMS[]> => {
    const response: AxiosResponse<SMSResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/sms?difficulty=${difficulty}`
    );

    return response.data.smsData;
};
