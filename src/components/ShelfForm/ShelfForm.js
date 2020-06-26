import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShelfForm extends Component {
    //POST w/inputs
    state = {
        description: "",
        image_url: ""
    }
    newItem = (event, type) => {
        console.log('input is:', event.target.value);
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }//end newItem

    addItem = () => {
        console.log('add this item:', this.state)
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state
        })
        this.setState({
            description: "",
            image_url: ""
        })
    }//end addItem

    render() {
        return (
            <div>
                <input placeholder="Add new item" onChange={(event) => this.newItem(event, 'description')}></input>
                <input placeholder="image url" onChange={(event) => this.newItem(event, 'image_url')}></input>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(ShelfForm);