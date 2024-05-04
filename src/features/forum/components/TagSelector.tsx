import { useState, useEffect } from 'react';
import { PostTag } from '@/utils/forum/postEnums';

import Dropdown from 'react-bootstrap/Dropdown';
import { Field, FieldProps, useFormikContext } from 'formik';

import { TagLabel } from './TagLabel';

import styled from 'styled-components';

const DropToggle = styled(Dropdown.Toggle)`
    background-color: transparent;
    color: black;
    white-space: normal;
    overflow-wrap: break-word;
    width: 100%;
`;

// Need to override the default Dropdown.Item style to make tags display inline
const DropItem = styled(Dropdown.Item)`
    display: inline-block;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    row-gap: 5px;
    column-gap: 10px;
    padding: 10px;
`;

const TagButton = styled.button`
    padding: 0;
    border: none;
    border-radius: var(--tag-border-radius);
`;

interface TagSelectorProps {
    name: string;
}

export const TagSelector: React.FC<TagSelectorProps> = ({ name }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [unselectedTags, setUnselectedTags] = useState<string[]>(Object.keys(PostTag));
    // This allows the form in the other file to retrieve the selected tags
    const { setFieldValue } = useFormikContext();

    const handleTagClick = (tag: string) => {
        // I have to do it this way since useState does not play well with Set
        const tempTagSet = new Set(selectedTags);

        // Add or remove tag from set depending on if it is already selected
        if (tempTagSet.has(tag)) {
            tempTagSet.delete(tag);
        } else {
            tempTagSet.add(tag);
        }

        setSelectedTags(Array.from(tempTagSet));
        // Update the formik field value
        // Not using setSelectedTags because it is async and the value is not updated immediately
        // tempTagSet is though!
        setFieldValue(name, Array.from(tempTagSet));
    };

    const getUnselectedTags = () => {
        const tempTagSet = new Set(selectedTags);
        const allTags = Object.keys(PostTag);

        return Array.from(allTags.filter((tag) => !tempTagSet.has(tag)));
    };

    useEffect(() => {
        setUnselectedTags(getUnselectedTags());
    }, [selectedTags]);

    // Had to use a custom Field component to get the field value
    return (
        <Field name={name}>
            {({ field }: FieldProps) => (
                <Dropdown key={selectedTags.join('-')}>
                    <DropToggle>
                        Selected tags:{' '}
                        {selectedTags.length === 0 ? (
                            'None'
                        ) : (
                            <TagContainer>
                                {selectedTags.map((tag) => (
                                    <TagButton
                                        key={`${tag}-selected-button`}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        <TagLabel
                                            tag={PostTag[tag as keyof typeof PostTag]}
                                            showRemove
                                        />
                                    </TagButton>
                                ))}
                            </TagContainer>
                        )}
                    </DropToggle>
                    <Dropdown.Menu style={{ width: '100%' }}>
                        <TagContainer>
                            {unselectedTags.length !== 0 ? (
                                unselectedTags.map((tag) => (
                                    <DropItem
                                        as={TagButton}
                                        onClick={() => handleTagClick(tag)}
                                        eventKey={`${tag}-button`}
                                    >
                                        <TagLabel tag={PostTag[tag as keyof typeof PostTag]} />
                                    </DropItem>
                                ))
                            ) : (
                                <p>No tags left...</p>
                            )}
                        </TagContainer>
                    </Dropdown.Menu>
                </Dropdown>
            )}
        </Field>
    );
};
