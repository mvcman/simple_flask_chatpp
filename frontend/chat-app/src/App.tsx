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
        <div style={{ width: '100%', height: '100%'}}>
            <Switch>
                { !context.isLogedin &&
                    <Route exact path="/">
                        <Login />
                    </Route>
                }
                { context.isLogedin && 
                    <Route exact path="/main">
                        <Main />
                    </Route>
                }
            </Switch>
        </div>
    )
    
}

export default App;
