/* Email */
export type Email = {
    sender: string;
    senderName: string;
    senderProfile: string;
    recipient: string;
    recipientName: string;
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
    number: string;
    content: string;
    timeStamp: string;
    isPhishing: boolean;
};

// This is how the response from the API looks like
export type SMSResponse = {
    smsData: SMS[];
};
