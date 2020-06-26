import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableItems extends Component {
    render() {
        console.log('table', this.props);
        return (
            <tr>
                <td><img alt='placeholder' src={this.props.response.image_url}></img></td>
            </tr>

        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(TableItems);