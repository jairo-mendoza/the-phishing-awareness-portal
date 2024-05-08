/* This only gets a singular post */
import axios, { AxiosResponse } from 'axios';
import { Post, PostResponse } from '../types';

export const getPost = async (id: string): Promise<Post> => {
    const response: AxiosResponse<PostResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/post/${id}`
    );

    return response.data.forumPost;
};
