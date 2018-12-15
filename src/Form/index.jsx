import * as React from 'react';
import * as Belle from 'belle';


export class Form extends React.Component {

    state = {
        alias: '',
        address: '',
        total: '',
        token: '',
        attachment: ''
    };

    submitHandler = () => {

    };

    render() {
        return <form onSubmit={this.submitHandler}>
            <input type="" placeholder="email"/>
            <input type="" placeholder="total"/>
            <input type="" placeholder="token"/>
            <input type="" placeholder="attachment"/>
        </form> ;
    }
}
