import Container from 'react-bootstrap/Container';

import { EmailHeader } from './EmailHeader';
import { styled } from 'styled-components';
import { EmailFooter } from './EmailFooter';
import { getEmail } from '../../api/getEmail';
import { useEffect, useState } from 'react';
import { Email } from '../../types';
import ReactMarkdown from 'react-markdown';
import { UrgencyTooltip, UrlTypoTooltip } from '@/utils/EmailTooltips';

const EmailBody = styled.p`
    padding: 30px;
    text-align: left;
`;

const EmailContainer = styled(Container)`
    border: 1px solid black;
    border-radius: 5px;
`;

// const emailData = {
//     emailId: '12345678',
//     sender: 'attacker@gmail.com',
//     senderProfile: 'https://www.gravatar.com/avatar/',
//     recipient: 'danny@gmail.com',
//     senderName: 'Attacker',
//     recipientName: 'Danny',
//     subject: 'Your Account Has Been Accessed',
//     body: 'Your account has been accessed by an unauthorized user. Please click the link below to reset your password.',
//     timeStamp: new Date().toLocaleString(),
// };

export const EmailView = () => {
    const [emailData, setEmailData] = useState<Email | null>(null);

    useEffect(() => {
        getEmail().then((data) => setEmailData(data));
    }, []);

    if (!emailData) {
        console.log('no data to show.');
        return null;
    }

    const timeStamp = new Date(emailData.timeStamp).toDateString();

    return (
        <EmailContainer>
            <EmailHeader
                sender={emailData.sender}
                senderName={emailData.senderName}
                senderProfile={emailData.senderProfile}
                recipient={emailData.recipient}
                recipientName={emailData.recipientName}
                subject={emailData.subject}
                timeStamp={timeStamp}
            />

            <EmailBody>
                <ReactMarkdown
                    components={{
                        a: ({ node, ...props }) => (
                            <>
                                {/* Disable redirects on click for the links, for user safety */}
                                <a {...props} onClick={(e) => e.preventDefault()} />
                                {/* Show link tooltip if needed */}
                                <UrlTypoTooltip />
                            </>
                        ),
                    }}
                >
                    {emailData.body}
                </ReactMarkdown>
            </EmailBody>

            <EmailFooter />
        </EmailContainer>
    );
};
