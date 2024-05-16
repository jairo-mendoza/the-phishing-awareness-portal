import Stack from 'react-bootstrap/Stack';
import { EmailView } from './components/email/EmailView';
import { SMSView } from './components/sms/SMSView';
import { MessageTrustAssessor } from './components/MessageTrustAssessor';
import { useEffect, useState } from 'react';
import { getEmail } from './api/getEmail';
import { Email, SMS, TrainingMediums } from './types';
import styled from 'styled-components';
import { getSMS } from './api/getSMS';
import { getAll } from './api/getAll';
import { useStore } from './context/selectedButtonStore';

const TrainingContainer = styled(Stack)`
    margin-top: 50px;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

interface TrainingEnvironmentProps {
    medium: string;
    difficulty: string;
}

export const TrainingEnvironment: React.FC<TrainingEnvironmentProps> = ({ medium, difficulty }) => {
    const [data, setData] = useState<(Email | SMS)[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { setSelectedButton } = useStore();

    useEffect(() => {
        switch (medium) {
            case TrainingMediums.Email:
                getEmail(difficulty).then((data) => setData(data));
                break;
            case TrainingMediums.SMS:
                getSMS(difficulty).then((data) => setData(data));
                break;
            case TrainingMediums.Both:
                getAll(difficulty).then((data) => setData(data));
                break;
            default:
                console.log('Invalid medium');
        }
    }, []);

    if (!data) {
        console.log('no data to show.');
        return <div>No data to show...</div>;
    }

    const currentMessage = data[currentIndex];
    const isPhishing = currentMessage.isPhishing;

    const handleNextIndex = () => {
        if (currentIndex === (data?.length ?? 1) - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }

        setSelectedButton('');
    };

    return (
        <TrainingContainer direction="vertical" gap={2}>
            {currentMessage?.type === 'email' ? (
                <EmailView
                    sender={(currentMessage as Email).sender}
                    senderName={(currentMessage as Email).senderName}
                    senderProfile={(currentMessage as Email).senderProfile}
                    subject={(currentMessage as Email).subject}
                    body={(currentMessage as Email).body}
                    timeStamp={(currentMessage as Email).timeStamp}
                />
            ) : (
                <SMSView
                    number={(currentMessage as SMS).number}
                    content={(currentMessage as SMS).content}
                    timeStamp={(currentMessage as SMS).timeStamp}
                />
            )}
            <MessageTrustAssessor key={currentIndex} isPhishing={isPhishing} />
            <button onClick={handleNextIndex}>Next</button>
        </TrainingContainer>
    );
};
