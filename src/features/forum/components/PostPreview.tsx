/**
 * The PostPreview component will be used in the post list. It will display the post title, poster, and the first 100 characters of the post content.
 *
 * */
import Card from 'react-bootstrap/Card';

import styled from 'styled-components';
import { PostTag, PostType } from '../../../utils/forum/postEnums';
import { HeartButton } from './HeartButton';
import { PostUser } from '../types';
import { useNavigate } from 'react-router-dom';
import { PostTitle } from './PostTitle';
import { PostTagList } from './PostTagList';

interface PostPreviewProps {
    id: string;
    title: string;
    poster: PostUser;
    content: string;
    likes: number;
    timeStamp: string;
    type: PostType;
    tags?: PostTag[];
    img?: string;
}

const PostCard = styled(Card)`
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;
    max-width: 800px;
`;

const PostFooter = styled(Card.Footer)`
    background-color: none;
    border-top: none;
`;

export const PostPreview: React.FC<PostPreviewProps> = ({
    id,
    title,
    poster,
    content,
    likes,
    timeStamp,
    type,
    tags,
    img,
}) => {
    // Convert the timestamp to a more readable format
    timeStamp = new Date(timeStamp).toLocaleDateString();
    const navigate = useNavigate();

    return (
        <PostCard onClick={() => navigate(`/post/${id}`)}>
            <Card.Body>
                <PostTitle title={title} type={type} />

                <Card.Subtitle className="mb-2 text-muted">
                    Posted by {poster.userName} on {timeStamp}
                </Card.Subtitle>

                {/* Display tags if they exist */}
                <PostTagList tags={tags} />

                <Card.Text>{content.substring(0, 200)}</Card.Text>
                {img && <Card.Img src={img} />}
            </Card.Body>
            <PostFooter>
                <HeartButton />
                {likes}
            </PostFooter>
        </PostCard>
    );
};
