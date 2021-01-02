import Axios from 'axios';
import {conf} from '../config';

const serverAddr = conf.server.host;

export async function checkRoomId(roomId) {
    return Axios.post()
}
