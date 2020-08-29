import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function InputBox() {
    const [message, setMessage] = React.useState<string>('');
    return (
        <div>
            <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="outlined"
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
            <Button type="button" variant="outlined" color="secondary">SEND MESSAGE</Button>
            <Button variant="outlined" type="button" color="secondary">tag</Button>
        </div>
    )
}