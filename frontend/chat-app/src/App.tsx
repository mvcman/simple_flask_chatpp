import React, { useContext } from 'react';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import { Context } from './components/context';
import { Route, Switch } from 'react-router-dom';

function App() {
    const context = useContext(Context);
    console.log(context);
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
    
}

export default App;
