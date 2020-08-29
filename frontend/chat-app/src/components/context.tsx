import React from 'react';
import { getTags } from './apifunctions';

const Context = React.createContext({
    messages: [],
    tags: []
});

class Provider extends React.Component {
    state = {
        messages: [],
        tags: [],
    }

    componentDidMount = async () => {
        const tags = await this.getMyTags();
        this.setState({
            messages: ["let", "p"],
            tags: tags
        });
    }

    getMyTags = async () => {
        const tags = await getTags();
        return tags;
    }

    render() {
        return (
            <Context.Provider value={{ messages: this.state.messages, tags: this.state.tags }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;
export { Context, Provider, Consumer };