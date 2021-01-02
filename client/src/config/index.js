import {local} from './local';
import {prod} from './prod';

const env = process.env.NODE_ENV;
console.log(`${env} environment`);

export const conf = {
    local,
    prod,
    production: prod,
}[env];
