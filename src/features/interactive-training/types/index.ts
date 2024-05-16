/* Email */
export type Email = {
    type: string;
    sender: string;
    senderName: string;
    senderProfile: string;
    subject: string;
    body: string;
    timeStamp: string;
    isPhishing: boolean;
};

// This is how the response from the API looks like
export type EmailResponse = {
    emailData: Email[];
};

/* SMS */
export type SMS = {
    type: string;
    number: string;
    content: string;
    timeStamp: string;
    isPhishing: boolean;
};

// This is how the response from the API looks like
export type SMSResponse = {
    smsData: SMS[];
};

// Data for an array with both sms and email
export type AllCommResponse = {
    data: (Email | SMS)[];
};

/* Training Options */
export enum TrainingMediums {
    Email = 'Email',
    SMS = 'SMS',
    Both = 'Both',
}
