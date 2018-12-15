import React, {Component} from 'react';
import Send from './containers/Send';
import Approve from './containers/Approve';
import Sign from './containers/Sign';
import './App.css';
import { NODE, ORACLE_ADDRESS, ORACLE_TMP_SEED } from './constants';
import WService from './services/signService';
import { getNodeData } from './services/getData';
import { setTx } from './services/sendData';



class App extends Component {

    constructor(props) {
        super(props);
        this.WS = new WService(ORACLE_TMP_SEED);
        this.state = {loading: true, data: [], address: this.WS.address};
        this.loadData();
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
        const isCreate = window.location.pathname.includes('create');
        const isSend = !isAuth && !isCreate;

        return (
            <div className="App">
                <div>
                    <p>ORACLE NODE: {this.state.address}</p>
                </div>
                {isSend ? <Send data={this.state.data}/> : null}
                {isAuth ? <Approve/> : null}
                {isCreate ? <Sign/> : null}
            </div>
        );
    }

    setData(data) {
        const tx = this.WS.getDataTransaction(data);
        return setTx(tx);

    }

}

export default App;
