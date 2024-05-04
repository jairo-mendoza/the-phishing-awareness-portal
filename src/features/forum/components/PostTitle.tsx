import { PostType } from '@/utils/forum/postEnums';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface PostTitleProps {
    title: string;
    type: PostType;
}

export const PostTitle: React.FC<PostTitleProps> = ({ title, type }: PostTitleProps) => {
    return (
        <Card.Title>
            {`[${type && type !== PostType.None && type.toUpperCase()}]`} {title}
        </Card.Title>
    );
};
