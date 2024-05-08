import { Post } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';

import styled from 'styled-components';
import { Card, Stack } from 'react-bootstrap';
import { PostTitle } from './PostTitle';
import { PostTagList } from './PostTagList';

import BackArrow from '@/assets/icons/back-arrow.svg';
import { CommentInput } from './CommentInput';
import { Comment } from './Comment';

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const PostInfoContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid #ddd; // Use a lighter color
    border-radius: 4px; // Add some border-radius
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const PostCommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
    width: 100%;
    height: 60vh;
`;

export const ForumPost = () => {
    const { id } = useParams();
    const [postData, setPostData] = useState<Post | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getPost(id)
                .then((data) => setPostData(data))
                .catch((err) => <div>404: Could not find post.</div>);
        }
    }, [id]);

    if (!postData) {
        return <div>Loading...</div>;
    }

    return (
        <PostContainer>
            <PostInfoContainer>
                <Stack direction="horizontal" gap={1} className="mb-2">
                    {/* Display back arrow and post title */}
                    <img
                        height="30px"
                        src={BackArrow}
                        alt="Back Arrow"
                        onClick={() => navigate(-1)}
                        style={{ cursor: 'pointer' }}
                    />
                    <PostTitle title={postData.title} type={postData.type} />
                </Stack>
                {/* Display tags if they exist */}
                <PostTagList tags={postData.tags} />
                {/* Poster and date information */}
                <Stack direction="horizontal" gap={1}>
                    <p style={{ fontStyle: 'italic' }}>Posted by {postData.poster.userName}</p>
                    {postData.createdAt === postData.updatedAt ? (
                        <p style={{ fontStyle: 'italic' }}>
                            on {new Date(postData.createdAt).toLocaleDateString()}
                        </p>
                    ) : (
                        <p style={{ fontStyle: 'italic' }}>
                            on {new Date(postData.updatedAt).toLocaleDateString()} (edited)
                        </p>
                    )}
                </Stack>
                <p>{postData.content}</p>
                <p>{postData.likes} likes</p>
            </PostInfoContainer>

            <PostCommentsContainer>
                <h5>Comments</h5>
                <CommentInput postId={postData._id} userId={postData.poster._id} />
                {postData.comments.length > 0 ? (
                    <div style={{ width: '100%' }}>
                        {postData.comments.map((comment) => (
                            <div key={comment._id}>
                                <Comment
                                    content={comment.content}
                                    commentorUserName={comment.commentor.userName}
                                    id={comment._id}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No comments... yet!</div>
                )}
            </PostCommentsContainer>
        </PostContainer>
    );
};
