import Container from 'react-bootstrap/Container';

import { EmailHeader } from './EmailHeader';
import { styled } from 'styled-components';
import { EmailFooter } from './EmailFooter';
import { Email } from '../../types';
import ReactMarkdown from 'react-markdown';
import { UrlTypoTooltip } from '@/utils/EmailTooltips';
import { useStore } from '../../context/selectedButtonStore';

const EmailBody = styled.p`
    padding: 30px;
    text-align: left;
`;

const EmailContainer = styled(Container)`
    border: 1px solid black;
    border-radius: 5px;
`;

interface EmailViewProps extends Omit<Email, 'isPhishing' | 'type'> {}

export const EmailView: React.FC<EmailViewProps> = ({
    sender,
    senderName,
    senderProfile,
    subject,
    body,
    timeStamp,
}) => {
    // Utilizing zustand's state management to store the selected button
    const { selectedButton } = useStore();

    timeStamp = new Date(timeStamp).toDateString();

    return (
        <EmailContainer>
            <EmailHeader
                sender={sender}
                senderName={senderName}
                senderProfile={senderProfile}
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
                                {selectedButton && <UrlTypoTooltip />}
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
