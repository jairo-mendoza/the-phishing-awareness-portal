import { PostFormView } from '../components/PostFormView';

export const PostForm = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <h2
                style={{
                    height: '30px',
                    textAlign: 'center',
                    // Offseting header to make form completely centered
                    marginTop: '-30px',
                }}
            >
                Create a new post
            </h2>
            <PostFormView />
        </div>
    );
};
