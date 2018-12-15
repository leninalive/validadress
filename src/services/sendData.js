import * as request from 'superagent';
import { NODE, ORACLE_ADDRESS } from '../constants';
import { getUrl } from './utils';


export function emailAuth(data) {
    return request.post('email', data);
}

export function setNodeData(tx, server = NODE) {
    return new Promise((resolve, reject) =>
        request.get(getUrl(`/`, server))
            .then(response => resolve(response.body))
            .catch(reject));
}


export function setTx(tx, server = NODE) {
    return request.post(`${server}transactions/broadcast`, tx);
}
