import * as request from 'superagent';
import { NODE, ORACLE_ADDRESS } from '../constants';
import { getUrl } from './utils';

export function getNodeData(address, server = NODE) {
    return new Promise((resolve, reject) =>
        request.get(getUrl(`/addresses/data/${address || ORACLE_ADDRESS}`, server))
            .then(response => resolve(response.body))
            .catch(reject));
}

export function getUserData(address, key, server = NODE) {
    return new Promise((resolve, reject) =>
        request.get(getUrl(`/addresses/data/${address}/${key}`, server))
            .then(response => resolve(response.body))
            .catch(reject));
}

