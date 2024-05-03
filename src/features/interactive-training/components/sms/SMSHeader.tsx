import { Image } from 'react-bootstrap';

import DefaultProfilePic from '@/assets/icons/default-profile-pic.png';

import styled from 'styled-components';

interface SMSHeaderProps {
    phoneNum: string;
}

const HeaderContainer = styled.div`
    border-radius: 25px 25px 0 0;
    padding: 10px;
    background-color: #f0f0f0;
`;

const ProfileImage = styled(Image)`
    width: 40px;
    height: 40px;
`;

const HeaderTitle = styled.h6`
    margin: 0;
`;

const formatPhoneNum = (phoneNum: string) => {
    // Remove all non digit characters
    const cleaned = phoneNum.replace(/\D/g, '');

    // Check if the phone number is valid with regular expression pattern
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
};

export const SMSHeader: React.FC<SMSHeaderProps> = ({ phoneNum }) => {
    const formatedPhoneNum = formatPhoneNum(phoneNum);

    return (
        <HeaderContainer>
            <ProfileImage src={DefaultProfilePic} roundedCircle />

            {/* If the phone number is not valid, display "Unknown" */}
            {formatedPhoneNum ? (
                <HeaderTitle>{formatedPhoneNum}</HeaderTitle>
            ) : (
                <HeaderTitle>Unknown</HeaderTitle>
            )}
        </HeaderContainer>
    );
};
