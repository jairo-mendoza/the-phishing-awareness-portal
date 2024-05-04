import { PostTag, PostType } from '@/utils/forum/postEnums';

// This type will appear when we are displaying the post preview cards on the post list
export type PostOverview = {
    _id: string;
    title: string;
    type: PostType;
    tags: PostTag[];
    content: string;
    likes: number;
    poster: PostUser;
    updatedAt: string;
    img?: string;
};

// This type will appear when we are displaying the full post on the post page
export type Post = PostOverview & {
    comments: string[];
    createdAt: string;
};

// This is how the response from the API looks like
export type PostsResponse = {
    forumPosts: PostOverview[];
};

export type PostResponse = {
    forumPost: Post;
};

export type PostUser = {
    _id: string;
    userName: string;
};
