import axios, { AxiosResponse } from 'axios';

import { SMS, SMSResponse } from '../types';

export const getSMS = async (): Promise<SMS> => {
    const response: AxiosResponse<SMSResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/sms/`
    );

    return response.data.smsData;
};
