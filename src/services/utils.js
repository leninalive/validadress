import {NODE} from "../constants";

export function getUrl(path, server) {
    const url = new URL(server || NODE);
    url.pathname = path;
    return url.toString();
}
