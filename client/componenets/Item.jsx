import React from 'react';

export default class Item extends React.Component {
    constructor() {
        super();
        this.state = {editing: false};
    }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        this.props.removeItem(this.props.index);
    }

    save() {
        let newText = this.refs.itemText.value;
        this.props.updateItem(this.props.index, newText);
        this.setState({editing: false});
    }

    renderView() {
        return (
            <div>
                <div>{this.props.children}</div>
                <button onClick={this.edit.bind(this)}>Edit</button>
                <button onClick={this.remove.bind(this)}>Remove</button>
            </div>
        )
    }

    renderEdit() {
        return (
            <div>
                <textarea ref="itemText" defaultValue={this.props.children}/>
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        )
    }

    render() {
        if(this.state.editing)
            return this.renderEdit();
        return this.renderView();
    }
};