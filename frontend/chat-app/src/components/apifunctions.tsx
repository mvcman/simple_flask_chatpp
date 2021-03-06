//const url: string = 'localhost:5000';

export const getTags = async () => {
    try {
        const data = await fetch('http://localhost:5000/getTags');
        const tags = await data.json();
        console.log(tags);
        return tags;
    } catch(err){
        return { error: err };
    }
}

export const fetchMessageByTag = async (tagname: string) => {
    try {
        const data = await fetch(`http://localhost:5000/getMessages/${tagname}`);
        const messages = await data.json();
        console.log(messages);
        return messages;
    } catch (err) {
        return { error: err };
    }
}

export const addMessage = async (data: any) => {
    try {
        const result = await fetch('http://localhost:5000/addMessage', {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 
                "Content-type": "application/json"
            } 
        });
        //const resp = await result.json();
        //console.log(resp);
        return result;
    } catch(err) {
        return { error: err };
    }
}

export const getUsers = async () => {
    try {
        const data = await fetch('http://localhost:5000/fetchUsers');
        const users = await data.json();
        return users;
    } catch(err) {
        return { error: err };
    }
}

export const addUser = async (username: any) => {
    try {
        const result = await fetch('http://localhost:5000/addUser', {
            method: 'post',
            body: JSON.stringify(username),
            headers: { 
                "Content-type": "application/json"
            } 
        });
        return result;
    } catch (err){
        return { error: err };
    }
}

export const deleteUser = async (username: any) => {
    try {
        const result = await fetch('http://localhost:5000/deleteUser', {
            method: 'delete',
            body: JSON.stringify(username),
            headers: { 
                "Content-type": "application/json"
            } 
        });
        return result;
    } catch (err){
        return { error: err };
    }
}