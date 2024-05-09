import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

import styled from 'styled-components';
import { InfoDropdown } from './InfoDropdown';

import { SenderTypoTooltip, UrgencyTooltip } from '@/utils/EmailTooltips';

// Styled Components
const HeaderContainer = styled(Stack)`
    padding: 10px;
`;

const HeaderText = styled.p`
    // For some reason, the default margin for p tags is 16px. This messes up the spacing
    // in the email header, so we need to set the margin to 0.
    margin: 0;
    text-align: left;
`;

const SubjectText = styled.h5`
    text-align: left;
`;

const ProfileImage = styled(Image)`
    width: 50px;
    height: 50px;
`;

// Component Props
type EmailHeaderProps = {
    sender: string;
    senderName: string;
    senderProfile: string;
    recipient: string;
    recipientName: string;
    subject: string;
    timeStamp: string;
};

export const EmailHeader = ({
    sender,
    senderName,
    senderProfile,
    recipient,
    recipientName,
    subject,
    timeStamp,
}: EmailHeaderProps) => {
    return (
        <HeaderContainer direction="vertical" gap={2}>
            <div>
                <SubjectText>{subject}</SubjectText>
            </div>
            {/* Email Sender Profile Picture */}
            {/* TODO: Collapse sender email when the screen width gets small  */}
            <Stack direction="horizontal" gap={2}>
                <ProfileImage src={senderProfile} alt="Sender Profile" roundedCircle />
                <Stack direction="vertical">
                    {/* Email Sender Name and Email Address */}
                    <Stack direction="horizontal" gap={1}>
                        <div
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '200px', // Adjust as needed
                            }}
                        >
                            <HeaderText>{senderName}</HeaderText>
                        </div>
                        {/* &lt; = <       &gt; = > */}
                        <div
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '200px', // Adjust as needed
                            }}
                        >
                            <HeaderText>&lt;{sender}&gt;</HeaderText>
                        </div>
                        <SenderTypoTooltip />
                    </Stack>

                    {/* Email Metadata */}
                    <Stack direction="horizontal" gap={1}>
                        <HeaderText>To: Me</HeaderText>
                        <InfoDropdown
                            sender={sender}
                            senderName={senderName}
                            recipient={recipient}
                            subject={subject}
                            timeStamp={timeStamp}
                        />
                    </Stack>
                </Stack>
                {/* ms-auto is a margin utility that adds space in between sender icon/name and timestamp */}
                <p className="ms-auto">{timeStamp}</p>
            </Stack>
        </HeaderContainer>
    );
};
