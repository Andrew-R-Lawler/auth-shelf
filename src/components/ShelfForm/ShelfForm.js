import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShelfForm extends Component {
    //POST w/inputs
    state = {
        item: ''
    }
    newItem = (event) => {
        console.log('input is:', event.target.value);
        this.setState({
            item: event.target.value,
        })
    }//end newItem

    addItem = () => {
        console.log('add this item:', this.state.item)
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state.item
        })
    }//end addItem

    render() {
        return (
            <div>
                <h1>ShelfForm</h1>
                <input placeholder="Add new item" onChange={this.newItem}></input>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(ShelfForm);