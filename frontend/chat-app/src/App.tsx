import React, { useContext } from 'react';
import './App.css';
import { Context } from './components/context';
import Tags from './components/tags';

function App() {
    const context = useContext(Context);
  return (
    <div className="main">
        <div className="left">
            <div className="tags">
                <Tags tags={context.tags} />
            </div>
        </div>
        <div className="right">
            <h1>Welcome to chat app Mandar!</h1>
            <div className="screen">

            </div>
            <div className="input-box">

            </div>
        </div>
    </div>
  );
}

export default App;
