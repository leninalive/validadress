import * as React from 'react';

class Approve extends React.Component {

    constructor(props) {
        super(props);
        const url = new URL(window.location);
        const email = url.searchParams.get('email');
        const address = url.searchParams.get('a');

        this.state = {
            email,
            address
        }
    }

    render() {
        return <div>
            <div>
                Email <span>{this.state.email}</span>
            </div>
            <div>
                Address <span>{this.state.address}</span>
            </div>

            <button>Send</button>
        </div>;
    }
};

export default Approve;
