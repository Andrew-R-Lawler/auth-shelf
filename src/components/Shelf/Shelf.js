import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shelf extends Component {
    //GET
    componentDidMount() {
        this.getShelf();
    }
    getShelf() {
        const action = { type: 'GET_SHELF' };
        this.props.dispatch(action);
    };
  
    render() {
        return (
            <h1>Shelf</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>image</th>
                        </tr>
                        {this.props.reduxStore.shelf.map((item) => {
                            return (
                                <tr>
                                    <td><img src={item.image.image_url} /></td>
                                    <td>{item.description}/</td>
                                </tr>
                            )
                        })
                        }
                    </thead>
                </table>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(Shelf);