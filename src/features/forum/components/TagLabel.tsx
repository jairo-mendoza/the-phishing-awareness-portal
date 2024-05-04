import styled from 'styled-components';
import { lighten } from 'polished';
import { PostTag } from '../../../utils/forum/postEnums';
import { tagColors } from '@/utils/forum/postTagColors';

import CloseIcon from '@/assets/icons/close.svg';

interface TagLabelProps {
    tag: PostTag;
    showRemove?: boolean;
}

interface LabelContainerProps {
    color: string;
}

const LabelContainer = styled.div<LabelContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color};
    color: ${(props) => lighten(0.23, props.color)};
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: var(--tag-border-radius);
`;

export const TagLabel: React.FC<TagLabelProps> = ({ tag, showRemove }) => {
    const color = tagColors[tag];
    return (
        <LabelContainer color={color}>
            {tag}
            {showRemove && <img src={CloseIcon} alt="Remove tag" style={{ marginLeft: '5px' }} />}
        </LabelContainer>
    );
};
