import { Formik, Form, Field, FieldProps, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import styled, { css } from 'styled-components';
import { TagSelector } from './TagSelector';
import { RadioButton } from './RadioButton';
import { PostType } from '@/utils/forum/postEnums';
import axios from 'axios';
import { useUserStore } from '@/utils/userStore';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    overflow-y: auto;

    padding: 10px;

    // For phone screens
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const FieldStyles = css`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 0;
    border-radius: 4px;
`;

const StyledField = styled(Field)`
    ${FieldStyles};
`;

const StyledTextArea = styled.textarea`
    ${FieldStyles};
`;

const TitleField = styled(StyledField)`
    font-weight: bold;
`;

export const PostFormView = () => {
    const formMb = 'mb-4';
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    type: PostType.None,
                    tags: [],
                    content: '',
                    likes: 0,
                    poster: user?.userId || null,
                    comments: [],
                }}
                validate={(values) => {
                    const errors: { title?: string; content?: string } = {};

                    if (!values.title) {
                        errors.title = 'Post title is required';
                    }

                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log(values);
                    // Submit the form data
                    axios
                        .post(`${process.env.REACT_APP_API_URI}/posts/new-post`, values)
                        .then((res) => navigate('/forum'));
                }}
            >
                {({ values, handleChange, handleBlur, isSubmitting, errors, touched }) => (
                    <StyledForm>
                        {/* Title Field */}
                        {/* Display error message if title is touched and has an error */}
                        <div style={{ textAlign: 'left', width: '100%' }}>
                            {errors.title && touched.title && (
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-danger"
                                />
                            )}
                            <TitleField
                                type="text"
                                name="title"
                                placeholder="Enter title here..."
                                className={`${formMb}`}
                            />
                        </div>

                        {/* Tag Selector */}
                        <div style={{ width: '100%' }} className={formMb}>
                            <TagSelector name="tags" />
                        </div>

                        {/* Post Type Radio Buttons */}
                        <Stack
                            direction="horizontal"
                            gap={2}
                            style={{ maxWidth: '100%', flexWrap: 'wrap' }}
                            className={formMb}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>Post Type:</div>
                            <div
                                style={{ display: 'flex', flexWrap: 'wrap', flex: 1, gap: '10px' }}
                            >
                                <RadioButton name="type" value={PostType.Announcement} />
                                <RadioButton name="type" value={PostType.Discussion} />
                                <RadioButton name="type" value={PostType.Question} />
                                <RadioButton name="type" value={PostType.Important} />
                                <RadioButton name="type" value={PostType.None} defaultChecked />
                            </div>
                        </Stack>

                        {/* Content Field */}
                        <div style={{ width: '100%' }}>
                            <Field name="content">
                                {({ field }: FieldProps) => {
                                    return (
                                        <StyledTextArea
                                            {...field}
                                            value={field.value}
                                            onChange={field.onChange}
                                            placeholder="Enter content here..."
                                            className={formMb}
                                        />
                                    );
                                }}
                            </Field>
                        </div>

                        {/* Image Field */}
                        <div style={{ width: '100%', textAlign: 'left' }}>
                            <label htmlFor="image">Select an Image:</label>
                            <br />
                            <input type="file" accept="image/*" className={formMb} />
                        </div>

                        <p>Posting as {user?.userName}</p>

                        {/* Submit and Cancel Buttons */}
                        <Stack direction="horizontal" gap={3}>
                            <Button onClick={() => navigate('/forum')}>Cancel</Button>
                            <Button type="submit" disabled={isSubmitting}>
                                Post
                            </Button>
                        </Stack>
                    </StyledForm>
                )}
            </Formik>
        </>
    );
};
