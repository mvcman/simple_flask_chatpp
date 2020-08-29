import React from 'react';

const classes = {
    main: {
        width: '60%',
        listStyle: 'none',
    },
    message: {
        width: '100%',
        backgroundColor: '#fff',
        color: '#f10d64',
        borderRadius: '1px',
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
    return (
        <ul style={classes.main}>
            {props.messages.map((message: any, i: number) => <li style={classes.message} key={i + 1}>{message.msg}</li>)}
        </ul>
    )
}