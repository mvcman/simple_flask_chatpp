import React, { useContext } from 'react';
import { Context } from './context';
import Tags from './tags';
import Users from './Users';
import Messages from './messages';
import Input from './input';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Main() {
    const context = useContext(Context);
    const history = useHistory();
    console.log(context);
    if (context.loading){
        return <h1>Loading ...</h1>
    }

    const handleLogout = async () => {
        await context.logout();
        history.push('/');
    }
    return (
        <div className="main">
            <div className="left">
                <div className="tags">
                    <Tags tags={context.tags} />
                    <h4>Online Users</h4>
                    <Users users={context.users}/>
                </div>
            </div>
            <div className="right">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h1 style={{ color: '#fff'}}>Welcome to chat app {context.username}!</h1>
                    <Button variant="contained" color="secondary" onClick={() => handleLogout()}>Logout</Button>
                </div>
                <div className="screen">
                    <Messages messages={context.messages} />
                </div>
                <div className="input-box">
                    <Input />
                </div>
            </div>
        </div>
    );
}

export default Main;
