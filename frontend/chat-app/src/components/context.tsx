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
    isLogedin: false, 
});

class Provider extends React.Component {
    state = {
        messages: [],
        tags: [],
        loading: true,
        activeTag: '',
        username: '',
        isLogedin: false,
    }

    componentDidMount(){
        console.log('Mounted');
        setInterval(() => {
            this.fetchAll();
        }, 5000);
        this.fetchAll();
        //this.setState({
        //    username: localStorage.getItem('username'),
        //    isLogedin: true,
        //});

        //if (localStorage.getItem('username') !== null){
        //    this.login(localStorage.getItem('username'));
        //}
    }

    componentWillUnmount(){
        this.setState({
            isLogedin: false,
        });
    }

    login = (username: string) => {
        this.setState({
            username: username,
            isLogedin: true,
        });
        localStorage.setItem('username', username);
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
            <Context.Provider value={{ messages: this.state.messages, tags: this.state.tags, loading: this.state.loading, activeTag: this.state.activeTag, setTag: this.setTag, fetchAll: this.fetchAll, username: this.state.username, login: this.login, isLogedin: this.state.isLogedin }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;
export { Context, Provider, Consumer };