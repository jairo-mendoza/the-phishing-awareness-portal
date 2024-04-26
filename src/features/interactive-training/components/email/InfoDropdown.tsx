import Dropdown from 'react-bootstrap/Dropdown';
import { styled } from 'styled-components';

// Styled Components
const DropdownToggle = styled(Dropdown.Toggle)`
    background-color: transparent;
    border-color: transparent;
    color: black;
    width: 20px;
    height: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active,
    &:focus,
    &:hover {
        background-color: lightgray !important;
        border-color: lightgray !important;
    }
`;

const MenuItemText = styled(Dropdown.ItemText)`
    display: flex;
    justify-content: space-between;
`;

const MenuItemLabel = styled.span`
    color: gray;
    margin: 0;
    margin-right: 5px;
    // Adjust initial width to line up item labels
    flex: 0 0 60px;
    text-align: right;
`;

const MenuItemValue = styled.span`
    flex: 1;
    text-align: left;
    margin-right: 15px;
`;

// Component Props
type InfoDropdownProps = {
    sender: string;
    senderName: string;
    recipient: string;
    subject: string;
    timeStamp: string;
};

export const InfoDropdown = ({
    sender,
    senderName,
    recipient,
    subject,
    timeStamp,
}: InfoDropdownProps) => {
    return (
        <Dropdown>
            <DropdownToggle id="dropdown-basic" />

            <Dropdown.Menu>
                {/* Email Sender */}
                <MenuItemText>
                    <MenuItemLabel>From:</MenuItemLabel>
                    <MenuItemValue>
                        <strong>{senderName}</strong> &lt;{sender}&gt;
                    </MenuItemValue>
                </MenuItemText>

                {/* Email Recipient */}
                <MenuItemText>
                    <MenuItemLabel>To:</MenuItemLabel>
                    <MenuItemValue>{recipient}</MenuItemValue>
                </MenuItemText>

                {/* Email Sent Date */}
                <MenuItemText>
                    <MenuItemLabel>Date:</MenuItemLabel>
                    <MenuItemValue>{timeStamp}</MenuItemValue>
                </MenuItemText>

                {/* Email Subject */}
                <MenuItemText>
                    <MenuItemLabel>Subject:</MenuItemLabel>
                    <MenuItemValue>{subject}</MenuItemValue>
                </MenuItemText>
            </Dropdown.Menu>
        </Dropdown>
    );
};
