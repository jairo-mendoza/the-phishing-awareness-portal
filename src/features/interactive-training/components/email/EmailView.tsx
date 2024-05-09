import Container from 'react-bootstrap/Container';

import { EmailHeader } from './EmailHeader';
import { styled } from 'styled-components';
import { EmailFooter } from './EmailFooter';
import { Email } from '../../types';
import ReactMarkdown from 'react-markdown';
import { UrlTypoTooltip } from '@/utils/EmailTooltips';

const EmailBody = styled.p`
    padding: 30px;
    text-align: left;
`;

const EmailContainer = styled(Container)`
    border: 1px solid black;
    border-radius: 5px;
`;

interface EmailViewProps extends Omit<Email, 'isPhishing'> {}

export const EmailView: React.FC<EmailViewProps> = ({
    sender,
    senderName,
    senderProfile,
    recipient,
    recipientName,
    subject,
    body,
    timeStamp,
}) => {
    timeStamp = new Date(timeStamp).toDateString();

    return (
        <EmailContainer>
            <EmailHeader
                sender={sender}
                senderName={senderName}
                senderProfile={senderProfile}
                recipient={recipient}
                recipientName={recipientName}
                subject={subject}
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
                    {body}
                </ReactMarkdown>
            </EmailBody>

            <EmailFooter />
        </EmailContainer>
    );
};
