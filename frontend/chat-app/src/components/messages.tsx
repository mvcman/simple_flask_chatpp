import React from 'react';
import moment from 'moment';

const classes = {
    main: {
        width: 'auto',
        listStyle: 'none',
    },
    message: {
        width: 'auto',
        display: 'inline-block',
        backgroundColor: '#fff',
        color: '#f10d64',
        borderRadius: '0px 5px 0px 5px',
        margin: '2px 0px',
        padding: '2px 5px',
    },
    date: {
        width: 'auto',
        display: 'inline-block',
        backgroundColor: '#979a9a',
        color: '#6be405',
        borderRadius: '0px 5px 0px 5px',
        margin: '2px 0px',
        padding: '2px 5px',
    },
    outerdiv: {
        width: '60%', 
        display: 'flex', 
        flexDirection: 'column', 
        listStyle: 'none',
    }
}
export default function Messages(props: any) {
    if (props.messages.length === 0){
        return (
            <div style={{ width: 'auto', listStyle: 'none', display: 'flex', flexDirection: 'column'}}>
                <h1>Nothing to display!</h1>
        </div>
        );
    }
    return (
        <div style={{ width: 'auto', listStyle: 'none', display: 'flex', flexDirection: 'column'}}>
            {props.messages.map((message: any, i: number) => <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f5b7b1'}} key={i + 1}><p style={classes.message}>{message.msg}</p><h6 style={classes.date}>{moment(message.timestamp).format('ll')}</h6></div>)}
        </div>
    )
}