import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shelf extends Component {
    //GET
    componentDidMount() {
        this.getItems();
    }
    getItems() {
        const action = { type: 'GET_ITEMS' };
        this.props.dispatch(action);
    };
    render() {
        return (
            <h1>Shelf</h1>

        )//end return
    }//end render
}//end class

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Shelf);