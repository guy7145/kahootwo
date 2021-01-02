import Axios from 'axios';
import {conf} from '../../config';

const serverAddr = conf.server.host;

export async function checkRoomId(roomId) {
    const res = await Axios.get(`${serverAddr}/verify-room`, {
        params: {
            room: roomId,
        },
    });
    console.log(res);
    return false;
}

export async function checkNickname(roomId, nickname) {
    const res = await Axios.get(`${serverAddr}/verify-name`, {
        params: {
            room: roomId,
            name: nickname,
        },
    });
    console.log(res);
    return false;
}
