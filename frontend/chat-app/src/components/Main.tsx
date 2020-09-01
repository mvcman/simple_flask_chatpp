import React, { useContext } from 'react';
import { Context } from './context';
import Tags from './tags';
import Messages from './messages';
import Input from './input';

function Main() {
    const context = useContext(Context);
    console.log(context);
    if (context.loading){
        return <h1>Loading ...</h1>
    }
    return (
        <div className="main">
            <div className="left">
                <div className="tags">
                    <Tags tags={context.tags} />
                </div>
            </div>
            <div className="right">
                <h1 style={{ color: '#fff'}}>Welcome to chat app {context.username}!</h1>
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
