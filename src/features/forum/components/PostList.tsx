import { useEffect, useState } from 'react';

import Stack from 'react-bootstrap/Stack';
import { PostPreview } from './PostPreview';

import styled from 'styled-components';
import { PostOverview } from '../types';
import { getPosts } from '../api/getPosts';

const PostListContainer = styled(Stack)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostList = () => {
    const [postsData, setPostsData] = useState<PostOverview[]>([]);

    useEffect(() => {
        getPosts().then((data) => setPostsData(data));
    }, []);

    console.log(postsData);

    if (!postsData || postsData.length === 0) {
        return <p>No posts to show... yet!</p>;
    }

    return (
        <PostListContainer direction="vertical" gap={3}>
            {postsData.map((post: PostOverview) => (
                <PostPreview
                    key={post.title}
                    id={post._id}
                    title={post.title}
                    poster={post.poster}
                    content={post.content}
                    likes={post.likes}
                    timeStamp={post.updatedAt}
                    type={post.type}
                    tags={post.tags}
                />
            ))}
        </PostListContainer>
    );
};
