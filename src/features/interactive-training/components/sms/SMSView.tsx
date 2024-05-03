import { useEffect, useState } from 'react';

import { Stack } from 'react-bootstrap';
import { Message } from './Message';
import { SMSHeader } from './SMSHeader';

import styled from 'styled-components';
import { getSMS } from '../../api/getSMS';
import { SMS } from '../../types';

const PhoneContainer = styled.div`
    width: 100%;
    max-width: 375px; // iPhone X width
    height: auto;
    min-height: 812px; // iPhone X height
    border: 1px dotted #000;
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    margin: auto;
    background-color: #fff;

    @media (max-height: 700px) {
        width: 100%;
        overflow-y: auto; // enable scrolling
        min-height: 80vh; // take full viewport height
    }
`;

export const SMSView = () => {
    // const messages = {
    //     timestamp: '2021-09-01T12:00:00Z',
    //     number: '1234567890',
    //     content:
    //         'Wth is this u just ruined the doge fandom and meme and hello kitty for everybody and also doge is not a ninja idiot and hello kitty is a child friendly tv show and u made her swear u idiot﻿ ',
    // };
    const [smsData, setSMSData] = useState<SMS | null>(null);

    useEffect(() => {
        getSMS().then((data) => setSMSData(data));
    }, []);

    if (!smsData) {
        console.log('no data to show.');
        return null;
    }

    return (
        <PhoneContainer>
            <Stack direction="vertical" gap={1}>
                <SMSHeader phoneNum={smsData.number} />

                <div>
                    <h6>Text Message</h6>
                    <h6>{new Date(smsData.timeStamp).toDateString()}</h6>
                </div>
                <div className="ms-auto"></div>
                <Message content={smsData.content} />
            </Stack>
        </PhoneContainer>
    );
};
