import React from 'react';
import { getTags, fetchMessageByTag } from './apifunctions';

const Context = React.createContext({
    messages: [],
    tags: [],
    loading: true,
    activeTag: '',
    username: '',
    setTag: (tagname: any) => { return; },
    fetchAll: () => { return; },
    login: (username: string) => { return; }, 
});

class Provider extends React.Component {
    state = {
        messages: [],
        tags: [],
        loading: true,
        activeTag: '',
        username: '',
    }

    componentDidMount(){
        console.log('Mounted');
        setInterval(() => {
            this.fetchAll();
        }, 5000);
        this.fetchAll();
    }

    login = (username: string) => {
        this.setState({
            username: username,
        });
    }

    fetchAll = async () => {
        const tags = await this.getMyTags();
        let messages = [];
        if (this.state.activeTag !== ''){
            messages = await fetchMessageByTag(this.state.activeTag);
        }
        console.log(tags);
        this.setState({
            messages: messages,
            tags: tags,
            loading: false,
        });
    }

    getMyTags = async () => {
        const tags = await getTags();
        console.log(tags);
        return tags;
    }

    setTag = async (tagname: string) => {
        this.setState({
            activeTag: tagname,
        }, () => {this.fetchAll()});
    }

    render() {
        return (
            <Context.Provider value={{ messages: this.state.messages, tags: this.state.tags, loading: this.state.loading, activeTag: this.state.activeTag, setTag: this.setTag, fetchAll: this.fetchAll, username: this.state.username, login: this.login }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;
export { Context, Provider, Consumer };