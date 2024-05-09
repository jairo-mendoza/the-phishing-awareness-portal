import { useState } from 'react';

import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import styled from 'styled-components';

import CheckmarkIcon from '@/assets/icons/checkmark.svg';
import XMarkIcon from '@/assets/icons/x-mark.svg';
import { Container } from 'react-bootstrap';

const AssessorContainer = styled(Container)`
    padding: 0;
    border: 1px solid black;
    border-radius: 5px;
`;

const ButtonContainer = styled(Stack)`
    width: 100%;
    justify-content: center;
`;

const ImageButton = styled(Image)`
    width: 75px;
    height: 75px;
    cursor: pointer;
`;

interface MessageTrustAssessorProps {
    isPhishing: boolean;
}

export const MessageTrustAssessor: React.FC<MessageTrustAssessorProps> = ({ isPhishing }) => {
    const [hasSelected, setHasSelected] = useState(false);

    const handleClick = (userChoice: boolean) => {
        if (!hasSelected) {
            setHasSelected(true);
            // Check if the user got the question correct
            if (userChoice === isPhishing) {
                alert('Correct! Good job!');
            } else {
                alert('Incorrect! Please be careful next time.');
            }
        }
    };

    return (
        <AssessorContainer>
            <Stack direction="vertical" gap={2} className="p-4">
                <h5>Is this a phishing attempt?</h5>

                <ButtonContainer direction="horizontal" gap={5}>
                    <ImageButton src={XMarkIcon} onClick={() => handleClick(false)} roundedCircle />
                    <ImageButton
                        src={CheckmarkIcon}
                        onClick={() => handleClick(true)}
                        roundedCircle
                    />
                </ButtonContainer>
            </Stack>
        </AssessorContainer>
    );
};
