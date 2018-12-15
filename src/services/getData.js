import * as request from 'superagent';
import { NODE, ORACLE_ADDRESS } from 'src/constants';

export function getNodeData() {
    return new Promise((resolve, reject) =>
        request.get(getUrl(`/addresses/data/${ORACLE_ADDRESS}`, server))
            .then(response => resolve(response.body))
            .catch(reject));
}

export function getUserData(address, key) {
    return new Promise((resolve, reject) =>
        request.get(getUrl(`/addresses/data/${address}/${key}`, server))
            .then(response => resolve(response.body))
            .catch(reject));
}

export function getUrl(path, server) {
    const url = new URL(server || NODE);
    url.pathname = path;
    return url.toString();
}
