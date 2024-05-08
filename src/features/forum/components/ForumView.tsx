import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { PostList } from './PostList';

export const ForumView = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Forum</h1>
            <Button className="mb-2" variant="primary" onClick={() => navigate('/create-post')}>
                Create Post
            </Button>
            <PostList />
        </>
    );
};
