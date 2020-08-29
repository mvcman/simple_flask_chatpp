import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Context } from './context';

export default function Tags(props: any) {
    const context = useContext(Context);
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
            {props.tags.map((tag: any, i: number) => context.activeTag === tag ? <Button key={i + 1} variant="outlined" type="button" color="secondary" onClick={() => context.setTag(tag)}>{tag}</Button> : <Button key={i + 1} variant="contained" type="button" color="secondary" onClick={() => context.setTag(tag)}>{tag}</Button>)}
        </div>
    )
}