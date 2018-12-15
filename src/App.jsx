import React, {Component} from 'react';
import Send from './containers/Send';
import Approve from './containers/Approve';
import Sign from './containers/Sign';
import Resolve from './containers/Resolve';
import './App.css';
import { ORACLE_TMP_SEED } from './constants';
import WService from './services/signService';
import { getNodeData } from './services/getData';
import { setTx, emailAuth } from './services/sendData';



class App extends Component {

    approveHandler = (data) => {
        emailAuth(data).then(() => {
            this.setState({ confirm: true })
        })
    };

    constructor(props) {
        super(props);
        this.WS = new WService(ORACLE_TMP_SEED);
        this.state = {loading: true, data: [], address: this.WS.address};
        this.loadData();
        this.parseUrl();
    }

    parseUrl() {
        const isResolve = window.location.pathname.includes('resolve');
        if (!isResolve) {
            return null;
        }
        const url = new URL(window.location.href);
        const email = url.searchParams.get('e');
        const signature = url.searchParams.get('s');
        const address = url.searchParams.get('a');

        if (!email || !signature || !address) {
            this.setState({resolveError: true});
            return null;
        }

        this.setData([{
            key: email,
            value: address,
            type: 'string',
        }]).then(
            (data) => {
                this.setState({resolved: true, address, email});
            }
        );
    }

    loadData() {
        getNodeData(this.WS.address).then((data) => {
            console.log(data);
            if (data && data.length) {
                this.setState({ data })
            }
        }).finally(() => {
            this.setState({loading: false})
        });
    }

    render() {

        const isAuth = window.location.pathname.includes('auth');
        const isResolve = window.location.pathname.includes('resolve');
        const isCreate = window.location.pathname.includes('create');
        const isSend = !isAuth && !isCreate && !isResolve;

        return (
            <div className="App">
                <div>
                    <p>ORACLE NODE: {this.state.address}</p>
                </div>
                {isResolve ? <Resolve {...this.state}/> : null}
                {isSend ? <Send data={this.state.data}/> : null}
                {isAuth ? <Approve onClick={this.approveHandler} confirm={this.state.confirm}/> : null}
                {isCreate ? <Sign/> : null}
            </div>
        );
    }
                                    isResolve
    setData(data) {
        const tx = this.WS.getDataTransaction(data);
        return setTx(tx);

    }

}

export default App;
