import { Tooltip } from 'react-tooltip';
import { tips } from './tips';

import styled, { keyframes } from 'styled-components';

const EmailTooltip = styled(Tooltip)`
    max-width: 300px;
`;

// for blinking dot
const blink = keyframes`
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
`;

const BlinkingDot = styled.span`
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
    cursor: pointer;
    animation: ${blink} 1s linear infinite;
`;

export const SenderTypoTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="sender-typo-tooltip" />

            <EmailTooltip id="sender-typo-tooltip">
                <span>
                    <strong>Sender Typo</strong>
                    <br />
                    {tips.sender.typosquatting}
                </span>
            </EmailTooltip>
        </>
    );
};

export const UrlHttpsTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="url-https-tooltip" />

            <EmailTooltip id="url-https-tooltip">
                <span>
                    <strong>HTTPS</strong>
                    <br />
                    {tips.url.https}
                </span>
            </EmailTooltip>
        </>
    );
};

export const UrlMismatchTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="url-mismatch-tooltip" />

            <EmailTooltip id="url-mismatch-tooltip">
                <span>
                    <strong>URL Mismatch</strong>
                    <br />
                    {tips.url.mismatch}
                </span>
            </EmailTooltip>
        </>
    );
};

export const UrlTypoTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="url-typo-tooltip" />

            <EmailTooltip id="url-typo-tooltip">
                <span>
                    <strong>URL Typo</strong>
                    <br />
                    {tips.url.typosquatting}
                </span>
            </EmailTooltip>
        </>
    );
};

export const PersonalInfoTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="personal-info-tooltip" />

            <EmailTooltip id="personal-info-tooltip">
                <span>
                    <strong>Personal Information</strong>
                    <br />
                    {tips.misc.personal_info}
                </span>
            </EmailTooltip>
        </>
    );
};

export const TyposTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="typos-tooltip" />

            <EmailTooltip id="typos-tooltip">
                <span>
                    <strong>Typos</strong>
                    <br />
                    {tips.misc.typos}
                </span>
            </EmailTooltip>
        </>
    );
};

export const UnsolicitedRequestTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="unsolicited-request-tooltip" />

            <EmailTooltip id="unsolicited-request-tooltip">
                <span>
                    <strong>Unsolicited Request</strong>
                    <br />
                    {tips.misc.unsolicited_request}
                </span>
            </EmailTooltip>
        </>
    );
};

export const UrgencyTooltip = () => {
    return (
        <>
            <BlinkingDot data-tooltip-id="urgency-tooltip" />

            <EmailTooltip id="urgency-tooltip">
                <span>
                    <strong>Urgency</strong>
                    <br />
                    {tips.misc.urgency}
                </span>
            </EmailTooltip>
        </>
    );
};
