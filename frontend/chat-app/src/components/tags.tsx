import React from 'react';
import { Button } from '@material-ui/core';


export default function Tags(tags: any) {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
            {tags.map((tag: any, i: number) => <Button key={i + 1} type="button" color="primary">{tag}</Button>)}
        </div>
    )
}