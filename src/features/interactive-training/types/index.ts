export type Email = {
    sender: string;
    senderName: string;
    senderProfile: string;
    recipient: string;
    recipientName: string;
    subject: string;
    body: string;
    timeStamp: string;
};

// This is how the response from the API looks like
export type EmailResponse = {
    emailData: Email;
};
