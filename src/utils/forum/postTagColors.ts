/* Colors mapped to the PostTag enums */

import { PostTag } from './postEnums';

export const tagColors: Record<PostTag, string> = {
    [PostTag.General]: '#9E9E9E', // Gray
    [PostTag.EmailPhishing]: '#6CACE4', // Blue
    [PostTag.SpearPhishing]: '#6BBF71', // Green
    [PostTag.Whaling]: '#A67DB8', // Purple
    [PostTag.Smishing]: '#7FA8B8', // Light Blue
    [PostTag.Vishing]: '#E76C6E', // Red
    [PostTag.Pharming]: '#6FBFA0', // Teal
    [PostTag.ClonePhishing]: '#E4C16C', // Yellow
    [PostTag.Snowshoeing]: '#6C7AE4', // Indigo
};
