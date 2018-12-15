import React, {Component} from 'react';
import Send from './containers/Send';
import Approve from './containers/Approve';
import Sign from './containers/Sign';
import './App.css';

class App extends Component {

    render() {

        const isAuth = window.location.pathname.includes('auth');
        const isSend = !isAuth;

        return (
            <div className="App">
                {isAuth ? null : <Send/>}
                {isAuth ? <Approve/> : null}
                {isAuth ? null : <Sign/>}
            </div>
        );
    }
}

export default App;
