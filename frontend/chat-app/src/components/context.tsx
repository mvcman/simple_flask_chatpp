import React from 'react';
import { getTags, fetchMessageByTag } from './apifunctions';

const Context = React.createContext({
    messages: [],
    tags: [],
    loading: true,
    activeTag: 'dummy',
    setTag: (tagname: any) => { return; }
});

class Provider extends React.Component {
    state = {
        messages: [],
        tags: [],
        loading: true,
        activeTag: 'dummy',
    }

    componentDidMount(){
        console.log('Mounted');
        this.fetchAll();
    }

    fetchAll = async () => {
        const tags = await this.getMyTags();
        const messages = await fetchMessageByTag(this.state.activeTag);
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
            <Context.Provider value={{ messages: this.state.messages, tags: this.state.tags, loading: this.state.loading, activeTag: this.state.activeTag, setTag: this.setTag }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;
export { Context, Provider, Consumer };