/**
 *  This is an individual text message
 */
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MessageBubble = styled.div`
    max-width: 60%;
    padding: 10px 20px;
    margin: 5px 0 0 25px; // 25px is the space between the message and the edge of the screen (remember the message tail)
    background-color: #f0f0f0;
    border-radius: 18px;
    position: relative;
    align-self: flex-start;
    text-align: left;

    // For the message tail
    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border: 25px solid transparent;
        border-right-color: #f0f0f0;
        border-left: 0;
        border-bottom: 0;
        margin-bottom: 10px;
        margin-left: -15px;
    }
`;

interface MessageProps {
    content: string;
}

export const Message: React.FC<MessageProps> = ({ content }) => {
    return (
        <MessageBubble>
            <ReactMarkdown
                components={{
                    a: ({ node, ...props }) => (
                        <>
                            {/* Disable redirects on click for the links, for user safety */}
                            <a {...props} onClick={(e) => e.preventDefault()} />
                        </>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </MessageBubble>
    );
};
