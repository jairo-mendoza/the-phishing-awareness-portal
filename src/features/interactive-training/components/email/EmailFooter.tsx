import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { styled } from 'styled-components';

import BackArrowIcon from '@/assets/icons/back.svg';
import ForwardArrowIcon from '@/assets/icons/forward.svg';

const FooterStack = styled(Stack)`
    padding: 0 30px 30px 30px;
`;

export const EmailFooter = () => {
    return (
        <FooterStack direction="horizontal" gap={2}>
            <Button variant="outline-dark">
                <Image src={BackArrowIcon} alt="Reply Icon" />
                Reply
            </Button>
            <Button variant="outline-dark">
                <Image src={ForwardArrowIcon} alt="Forward Icon" />
                Forward
            </Button>
        </FooterStack>
    );
};
