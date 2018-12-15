import * as React from 'react';


export class Form extends React.Component {

    state = {
        alias: '',
        address: '',
        amount: '',
        token: '',
        attachment: '',
    };

    emailHandler = (e) => {
        const email = e.target.value.trim();
        const item = this.props.data.find(({key}) => key === email);
        if (item) {
            this.setState({address: item.value, email});
        } else {
            this.setState({address: '', email: ''});
        }
    };

    fieldHandler = (field) => e => {
        const value = e.target.value.trim();
        this.setState({[field]: value});
    };

    render() {
        const hasAddress = this.state.address;
        const hasLink = hasAddress && Number(this.state.amount);
        return <form onSubmit={this.submitHandler}>
            <p><input type="text" placeholder="email" onChange={this.emailHandler}/></p>
            <p><input disabled={!hasAddress} type="text" placeholder="amount" onChange={this.fieldHandler('amount')}/></p>
            <p><input disabled={!hasAddress} type="text" placeholder="token" onChange={this.fieldHandler('token')}/></p>
            {hasLink ? <a href={this.state.url}>Send</a> : <span>SEND</span>}
        </form>;
    }

    static fillAuthLink(state) {
        const asset = state.token || 'WAVES';
        const recipient = state.address;
        const amount = Number(state.amount);
        const referrer = `https://${window.location.host}/sended?email=${state.email}`;
        const hash = 'send/' + asset + '?strict=true&recipient=' + recipient + '&amount=' + amount + '&referrer=' + referrer;
        const url = new URL('https://client.wavesplatform.com/#' + hash);
        return {url: (recipient && amount ? url : '')};
    }

    static getDerivedStateFromProps(props, state) {
        return { ...state, ...Form.fillAuthLink(state) }
    }
}
