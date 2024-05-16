import Stack from 'react-bootstrap/Stack';
import { EmailView } from '../components/email/EmailView';
import { SMSView } from '../components/sms/SMSView';
import { MessageTrustAssessor } from '../components/MessageTrustAssessor';
import { useEffect, useState } from 'react';
import { getEmail } from '../api/getEmail';
import { Email, SMS } from '../types';
import styled from 'styled-components';
import { getSMS } from '../api/getSMS';

const TrainingContainer = styled(Stack)`
    margin-top: 50px;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const Training = () => {
    const [emailData, setEmailData] = useState<Email[] | null>(null);
    const [smsData, setSMSData] = useState<SMS[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        //getEmail().then((data) => setEmailData(data));
        getSMS(1).then((data) => setSMSData(data));
    }, []);

    if (!emailData && !smsData) {
        console.log('no data to show.');
        return <div>No data to show...</div>;
    }

    const currentSMS = smsData ? smsData[currentIndex] : null;
    const currentEmail = emailData ? emailData[currentIndex] : null;
    const isPhishing = currentEmail?.isPhishing ?? currentSMS?.isPhishing ?? false;

    const handleNextIndex = () => {
        if (currentIndex === (emailData?.length ?? smsData?.length ?? 1) - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <TrainingContainer direction="vertical" gap={2}>
            {emailData && (
                <EmailView
                    sender={currentEmail!.sender}
                    senderName={currentEmail!.senderName}
                    senderProfile={currentEmail!.senderProfile}
                    recipient={currentEmail!.recipient}
                    recipientName={currentEmail!.recipientName}
                    subject={currentEmail!.subject}
                    body={currentEmail!.body}
                    timeStamp={currentEmail!.timeStamp}
                />
            )}
            {smsData && (
                <SMSView
                    number={currentSMS!.number}
                    content={currentSMS!.content}
                    timeStamp={currentSMS!.timeStamp}
                />
            )}
            <MessageTrustAssessor isPhishing={isPhishing} />
            <button onClick={handleNextIndex}>Next</button>
        </TrainingContainer>
    );
};
