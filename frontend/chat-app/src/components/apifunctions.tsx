const url: string = 'localhost:5000';

export const getTags = async () => {
    try {
        const data = await fetch(url + '/getTags');
        const tags = await data.json();
        console.log(tags);
        return tags;
    } catch(err){
        return { error: err };
    }
}