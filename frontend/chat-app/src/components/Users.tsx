import React from 'react';

export function User(props: any) {
    return (
        <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '15px', color: '#fff', textTransform: 'uppercase', background: '#f35858', borderRadius: '5px'}}>{props.username}<div style={{ width: 10, height: 10, backgroundColor: '#03ED0A', borderRadius: '50%'}}></div></div>
    );
}

export default function Users(props: any) {
    console.log(props);
    if (props.users.length === 0){
        return <h4>Users not found!</h4>;
    }
    return (
        <div style={{ width: '100%', height: '40px'}}>
            {props.users.map((user: string) => <User username={user} />)}
        </div>
    );
}