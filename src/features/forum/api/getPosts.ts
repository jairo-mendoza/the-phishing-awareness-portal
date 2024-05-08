/* This gets all the forum posts */
import axios, { AxiosResponse } from 'axios';
import { PostOverview, PostsResponse } from '../types';

// Gets an array of posts
export const getPosts = async (): Promise<PostOverview[]> => {
    const reponse: AxiosResponse<PostsResponse> = await axios.get(
        `${process.env.REACT_APP_API_URI}/post/all-posts`
    );

    return reponse.data.forumPosts;
};
