import React, {Component} from 'react';
import {connect} from 'react-redux';

class ShelfItem extends Component{
    //map of reduxState
    //DELETE 

deleteItem = () => {
    this.props.dispatch({
        type: 'DELETE_ITEM',
        payload: this.state.item
    })
}


    render(){
        return(
            <h1>ShelfItem</h1>
            <div>
                <button onClick={this.deleteItem}>Delete Item</button>
            </div>

        )//end return
    }//end render
}//end class

export default connect()(ShelfItem);