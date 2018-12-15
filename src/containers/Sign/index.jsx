import * as React from 'react';

class Sign extends React.Component {

    state = {
        email: '',
        isValid: false,
    };

    emailHandler = (e) => {
        const email = e.target.value;
        this.setState({email, isValid: Sign.validateEmail(email)});
    };

    render() {
        return <div>
            <p>Auth Form</p>
            <p>
                <input type="text" placeholder="email" value={this.state.email} onChange={this.emailHandler}/>
            </p>
            <p>
                <a target="_blank"
                   disabled={!(this.state.email && this.state.isValid)}
                   href={Sign.fillAuthLink(this.state)}>Auth</a>
            </p>
        </div>;
    }

    static validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    static fillAuthLink(dataForSign) {
        const r = encodeURIComponent(`https:/localhost:3000/auth?email=${dataForSign.email}`);
        const n = encodeURIComponent('EmailTransfer');
        const d = encodeURIComponent(dataForSign.email.trim());
        const i = encodeURIComponent('https://trustamust.com/file/2018/08/trust8.png'.trim());
        const baseHref = 'https://client.wavesplatform.com#gateway/auth'.trim();
        return [baseHref + '?' + 'n=' + n, 'r=' + r, 'd=' + d, 'i=' + i].join('&');
    }
};

export default Sign;
