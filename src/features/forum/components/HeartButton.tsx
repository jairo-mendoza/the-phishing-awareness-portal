import { useState } from 'react';
import Image from 'react-bootstrap/Image';

import styled from 'styled-components';

import EmptyHeartIcon from '@/assets/icons/heart-empty.svg';
import FilledHeartIcon from '@/assets/icons/heart-filled.svg';

const LikeButton = styled.button`
    background: none;
    border: none;
    padding: 0;
`;

export const HeartButton = () => {
    const [isLiked, setFilled] = useState(false);

    const handleClick = () => {
        setFilled(!isLiked);
    };

    return (
        <LikeButton onClick={handleClick}>
            <Image src={isLiked ? FilledHeartIcon : EmptyHeartIcon} />
        </LikeButton>
    );
};
