import React, { useState, useContext } from 'react';
import { Context } from './context';
import { useHistory } from 'react-router-dom';

const classes = {
    inputbox: {
        width: '300px',
        height: '50px',
        border: '1px solid grey',
        fontSize: '15px',
        color: '#000',
        padding: '0px 5px',
        margin: '5px 0px',
    },
    butt: {
        width: '200px',
        height: '50px',
        border: '1px solid grey',
        backgroundColor: '#f09c9c',
        fontSize: '15px',
        color: '#000',
    }
}
export default function Login() {
    const [username, setUsername] = useState<string>(''); 
    const context = useContext(Context);
    const history = useHistory();
    const handleLogin = () => {
        context.login(username);
        history.push('/main');
    }
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#f35858', color: '#fff'}}>
            <h1>Welcome to chat App!</h1>
            <input style={classes.inputbox} type="text" placeholder="please enter your username" value={username} onChange={(e: any) => setUsername(e.target.value)} />
            <button style={classes.butt} onClick={() => handleLogin()}>Login</button>
        </div>
    )
}