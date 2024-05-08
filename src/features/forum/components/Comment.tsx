import { Card } from 'react-bootstrap';
import { styled } from 'styled-components';
import { HeartButton } from './HeartButton';

interface CommentProps {
    content: string;
    commentorUserName: string;
    id: string;
}

const CommentContainer = styled(Card)`
    width: 100%;
`;

const CommentBody = styled(Card.Body)`
    width: 100%;
    align-items: flex-start;
    text-align: left;
`;

const CommentFooter = styled(Card.Footer)`
    background-color: transparent;
`;

export const Comment = ({ content, commentorUserName, id }: CommentProps) => {
    return (
        <CommentContainer>
            <CommentBody>
                <Card.Text style={{ fontStyle: 'italic' }}>{commentorUserName} says:</Card.Text>
                <Card.Text>{content}</Card.Text>
                <CommentFooter>
                    <HeartButton />
                </CommentFooter>
            </CommentBody>
        </CommentContainer>
    );
};
