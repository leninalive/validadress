import * as React from 'react';

class Approve extends React.Component {

    constructor(props) {
        super(props);
        const url = new URL(window.location);
        const email = url.searchParams.get('email');
        const address = url.searchParams.get('a');
        const publicKey = url.searchParams.get('p');
        const signature = url.searchParams.get('s');

        if (!email || !address) {
            window.location.pathname = '/';
            return this;
        }

        this.state = {
            email,
            address,
            publicKey,
            signature
        }
    }

    render() {
        return <div>
            <div>
                <p>Email <span>{this.state.email}</span></p>
            </div>
            <div>
                <p>Address <span>{this.state.address}</span></p>
            </div>

            <p><button onClick={this.props.onClick({ ...this.state })}>Send</button></p>
        </div>;
    }
};

export default Approve;
