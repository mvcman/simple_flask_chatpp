import React, { useContext, useEffect } from 'react';
import { Context } from './context';
import { addMessage } from './apifunctions';

//import { TextField, Button } from '@material-ui/core';

const classes = {
    input: {
        width: '40%',
        height: '100%',
        color: '#000',
        padding: '0px 5px',
        fontSize: 15,
        border: '1px solid #7F8C8D',
    },
    buttonDiv: {
        width: '20%',
        height: '100%'
    },
    button: {
        width: '100%',
        height: '100%',
        background: '#f15858',
        color: '#f1f1f1',
        fontSize: 18,
    }
}

export default function InputBox() {
    const [message, setMessage] = React.useState<string>('');
    const [tag, setTagname] = React.useState<string>('');
    const context = useContext(Context);

    useEffect(() => {
        setTagname(context.activeTag);
    }, [context.activeTag]);

    const sendMessage = async () => {
        console.log('sending message!');
        const data = {
            sender_id: context.username,
            tag: tag,
            message: message,
            timestamp: new Date()
        }
        const response = await addMessage(data);
        console.log(response);
        if (response){
            //alert("Message sent!");
            context.fetchAll();
            setMessage('');
        }
    }
    
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
            <input placeholder="Write your message here..." style={classes.input} type="text" value={message} onChange={(e: any) => setMessage(e.target.value)} />
            <input placeholder="Your tag name here..." style={classes.input} type="text" value={tag} onChange={(e: any) => setTagname(e.target.value)} />
            <div style={classes.buttonDiv}>
                <button style={classes.button} onClick={() => sendMessage()} >Send Message</button>
            </div>
        </div>
    )
}