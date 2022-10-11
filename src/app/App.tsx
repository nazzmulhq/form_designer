import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { requestRefreshToken } from '../features/User/UserService';
import FormDesigner from '../features/FormDesigner/index';
import SortableContainer from '../features/SortableContainer';
import Projects from '../features/FormList';

function App() {

    const refreshTokenhandler = async () => await requestRefreshToken();
    React.useEffect(() => {
        setTimeout(function () {
            refreshTokenhandler(); FormDesigner
        }, 100);
    }, []);

    React.useEffect(() => {
        const intervalManager = setInterval(refreshTokenhandler, 290000);
        return () => {
            clearInterval(intervalManager);
        };
    }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact component={Projects} path="/" />
                    <Route exact component={FormDesigner} path="/form-designer" />
                    <Route exact component={SortableContainer} path="/new-dnd" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
