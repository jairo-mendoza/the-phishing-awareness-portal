import { useUserStore } from '@/utils/userStore';
import axios from 'axios';
import { Formik, Field, Form, FieldProps } from 'formik';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postForumComment } from '../api/postForumComment';
import { Comment } from '../types';

interface CommentInputProps {
    postId: string;
    userId: string;
}

export const CommentInput: React.FC<CommentInputProps> = ({
    postId,
    userId,
}: CommentInputProps) => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
    }

    return (
        <Formik
            initialValues={{ content: '' }}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const res = await postForumComment({
                        postId,
                        likes: 0,
                        content: values.content,
                        poster: userId,
                    });
                    await axios.put(`${process.env.REACT_APP_API_URI}/post/${postId}/add-comment`, {
                        commentId: res._id,
                    });
                    resetForm();
                } catch (error) {
                    console.error(error);
                    // Handle the error appropriately
                }

                resetForm();
            }}
        >
            <Form style={{ width: '100%' }}>
                <Stack direction="horizontal" gap={2} style={{ width: '100%' }}>
                    <Field name="content">
                        {({ field }: FieldProps) => {
                            return (
                                <textarea
                                    {...field}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Enter content here..."
                                    style={{ width: '100%' }}
                                />
                            );
                        }}
                    </Field>
                    <button type="submit">Submit</button>
                </Stack>
            </Form>
        </Formik>
    );
};
