import Stack from 'react-bootstrap/Stack';
import { EmailView } from '../components/email/EmailView';
import { SMSView } from '../components/sms/SMSView';
import { MessageTrustAssessor } from '../components/MessageTrustAssessor';
import { useEffect, useState } from 'react';
import { getEmail } from '../api/getEmail';
import { Email } from '../types';
import styled from 'styled-components';

const TrainingContainer = styled(Stack)`
    margin-top: 50px;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const Training = () => {
    const [emailData, setEmailData] = useState<Email | null>(null);

    useEffect(() => {
        getEmail().then((data) => setEmailData(data));
    }, []);

    if (!emailData) {
        console.log('no data to show.');
        return <div>No data to show...</div>;
    }

    return (
        <TrainingContainer direction="vertical" gap={2}>
            <EmailView
                sender={emailData.sender}
                senderName={emailData.senderName}
                senderProfile={emailData.senderProfile}
                recipient={emailData.recipient}
                recipientName={emailData.recipientName}
                subject={emailData.subject}
                body={emailData.body}
                timeStamp={emailData.timeStamp}
            />

            <MessageTrustAssessor isPhishing={emailData.isPhishing} />
        </TrainingContainer>
    );
};
