import Axios from 'axios';
import {conf} from '../../config';

const serverAddr = conf.server.host;

export async function checkHostSecret(secret) {
    const res = await Axios.get(`${serverAddr}/verify-host-secret`, {
        params: {
            secret
        },
    });
    return res.data;
}

export async function checkRoomId(roomId) {
    const res = await Axios.get(`${serverAddr}/verify-room`, {
        params: {
            gameId: roomId,
        },
    });
    return res.data;
}

export async function checkNickname(gameId, nickname) {
    const res = await Axios.get(`${serverAddr}/verify-name`, {
        params: {
            gameId: gameId,
            nickname: nickname,
        },
    });
    return res.data;
}
