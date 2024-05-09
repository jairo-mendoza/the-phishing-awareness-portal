import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import CheckmarkIcon from '@/assets/icons/checkmark.svg';
import XMarkIcon from '@/assets/icons/x-mark.svg';
import { Container } from 'react-bootstrap';
import { useStore } from '../context/selectedButtonStore';

const AssessorContainer = styled(Container)`
    padding: 0;
    border: 1px solid black;
    border-radius: 5px;
`;

const ButtonContainer = styled(Stack)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const imageButtonWidth = 75;

const ImageButton = styled(motion(Image))`
    width: ${imageButtonWidth}px;
    height: 75px;
    cursor: pointer;
`;

const ImageButtonTypes = {
    xmark: 'x-mark',
    checkmark: 'checkmark',
};

interface MessageTrustAssessorProps {
    isPhishing: boolean;
}

export const MessageTrustAssessor: React.FC<MessageTrustAssessorProps> = ({ isPhishing }) => {
    const [hasSelected, setHasSelected] = useState<boolean>(false);
    const { selectedButton, setSelectedButton } = useStore();

    const handleClick = (userChoice: boolean, image: string) => {
        if (!hasSelected) {
            setHasSelected(true);
            setSelectedButton(image);
        }
    };

    const selectedAnimation = (imageType: string) => ({
        x: imageType === ImageButtonTypes.checkmark ? -imageButtonWidth : imageButtonWidth,
        scale: [1, 1.2, 1],
        transition: { type: 'spring', stiffness: 300 },
    });
    const fadeOutAnimation = {
        opacity: 0,
        transition: { duration: 0.2 },
    };

    return (
        <AssessorContainer>
            <Stack direction="vertical" gap={2} className="p-4">
                <h5>Is this a phishing attempt?</h5>

                <ButtonContainer direction="horizontal" gap={5}>
                    {/* Animation will show correct answer regardless of what user*/}
                    <ImageButton
                        src={XMarkIcon}
                        onClick={() => handleClick(false, ImageButtonTypes.xmark)}
                        animate={
                            hasSelected
                                ? !isPhishing
                                    ? selectedAnimation(ImageButtonTypes.xmark)
                                    : fadeOutAnimation
                                : {}
                        }
                        transition={{ type: 'spring', stiffness: 300 }}
                        roundedCircle
                    />
                    <ImageButton
                        src={CheckmarkIcon}
                        onClick={() => handleClick(true, ImageButtonTypes.checkmark)}
                        roundedCircle
                        animate={
                            hasSelected
                                ? isPhishing
                                    ? selectedAnimation(ImageButtonTypes.checkmark)
                                    : fadeOutAnimation
                                : {}
                        }
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </ButtonContainer>

                {hasSelected &&
                    (() => {
                        if (isPhishing && selectedButton === ImageButtonTypes.checkmark) {
                            return <p>Good job! This was a phishing attempt.</p>;
                        } else if (!isPhishing && selectedButton === ImageButtonTypes.xmark) {
                            return <p>Good job! This was not a phishing attempt.</p>;
                        } else if (isPhishing && selectedButton === ImageButtonTypes.xmark) {
                            return <p>Incorrect! This was a phishing attempt.</p>;
                        }
                        return <p>Incorrect! This was not a phishing attempt.</p>;
                    })()}
            </Stack>
        </AssessorContainer>
    );
};
