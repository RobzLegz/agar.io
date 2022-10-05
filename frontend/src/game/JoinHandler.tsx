import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    joinChan,
    mySocket,
    selectSocket,
    setSocket,
    SocketInfo,
} from '../redux/slices/socketSlice';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { receiveUser } from '../redux/slices/appSlice';

const JoinHandler = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const socketInfo: SocketInfo = useSelector(selectSocket);

    useEffect(() => {
        if (!socketInfo.socket) {
            dispatch(setSocket());
        }
    }, [socketInfo.socket]);

    const [username, setUsername] = useState('');

    const handleJoin = (e: React.MouseEvent) => {
        e.preventDefault();

        if (joinChan) {
          console.log(joinChan)
            joinChan?.push('shout', { username: username });
            joinChan?.on('shout', (payload) => {
                dispatch(receiveUser(payload));
            });
            router.push('/ffa');
        }
    };

    return (
        <form>
            <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nick"
            />

            <button onClick={handleJoin}>Join</button>
        </form>
    );
};

export default JoinHandler;
