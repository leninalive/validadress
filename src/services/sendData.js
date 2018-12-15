import * as request from 'superagent';
import { NODE, ORACLE_ADDRESS } from 'src/constants';

export function emailAuth(data) {
    return request.post('email', data);
}
