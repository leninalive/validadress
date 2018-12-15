import * as React from 'react';
import { Form } from '../../Form';

const Send = (props) => {
    return <div>
        <Form data={props.data}/>

        <p>
            <a href="/create">Add email</a>
        </p>
    </div>;
};

export default Send;
