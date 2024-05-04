import { PostTag } from '@/utils/forum/postEnums';
import { Stack } from 'react-bootstrap';
import { TagLabel } from './TagLabel';

interface PostTagListProps {
    tags: PostTag[] | undefined | null;
}

export const PostTagList: React.FC<PostTagListProps> = ({ tags }: PostTagListProps) => {
    if (!tags) return null;

    return (
        <Stack className="mb-2" direction="horizontal" gap={2}>
            {tags.map((tag) => (
                <TagLabel key={tag} tag={tag} />
            ))}
        </Stack>
    );
};
