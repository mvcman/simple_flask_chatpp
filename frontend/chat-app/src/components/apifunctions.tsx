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