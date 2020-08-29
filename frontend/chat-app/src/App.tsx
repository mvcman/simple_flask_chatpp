import React, { useContext } from 'react';
import './App.css';
import { Context } from './components/context';
import Tags from './components/tags';
import Messages from './components/messages';
import Input from './components/input';

function App() {
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
            <h1>Welcome to chat app!</h1>
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

export default App;
