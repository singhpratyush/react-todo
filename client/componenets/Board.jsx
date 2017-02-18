import React from 'react';
import Item from './Item.jsx';


export default class Board extends React.Component {
    constructor() {
        super();
        this.state = {items: []};
    }

    removeItem(index) {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({items: items});
    }

    updateItem(index, text) {
        let items = this.state.items;
        items[index] = text;
        this.setState({items: items});
    }

    addItem () {
        let items = this.state.items;
        items.push('New Item');
        this.setState({items: items});
    }

    renderItem(text, index) {
        return (
            <Item key={index} index={index} updateItem={this.updateItem.bind(this)} removeItem={this.removeItem.bind(this)}>{text}</Item>
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.addItem.bind(this)}>Add</button>
                {this.state.items.map(this.renderItem.bind(this))}
            </div>
        );
    }
};