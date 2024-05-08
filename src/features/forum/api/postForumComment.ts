import axios, { AxiosResponse } from 'axios';
import { Comment, CommentResponse } from '../types';

// Omit the _id field from the Comment type since we don't have it when creating a new comment
type CommentInput = Omit<Comment, '_id'>;

export const postForumComment = async (commentData: CommentInput): Promise<Comment> => {
    const response: AxiosResponse<CommentResponse> = await axios.post(
        `${process.env.REACT_APP_API_URI}/comment/new-comment`,
        commentData
    );

    return response.data.forumPostComment;
};
