import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TableItems from './TableItems.js';

class Shelf extends Component {
    //GET
    componentDidMount() {
        this.getShelf();
    }
    getShelf() {
        const action = { type: 'GET_SHELF' };
        this.props.dispatch(action);
    };
    // populateTable = () => {
    //     console.log('table', this.props.reduxStore.shelfReducer);
    //     return this.props.reduxStore.shelfReducer.map((response, i) => {
    //         return <TableItems response={response} key={i} />

    //     })
    // }

    render() {

        return (
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