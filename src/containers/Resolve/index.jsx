import * as React from 'react';

export default function Resolve(props) {
    const { resolved, resolveError } = props;
    return <div>
        {resolved ? <p>{props.email} assign to {props.address}</p> : null}
        {resolveError ? <p>Incorrect link</p> : null}
    </div>;
}
