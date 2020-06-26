import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { response } from 'express';

function* getItems() {
    try {
        const itemsResponse = yield axios.get('/api/shelf')
        yield put({ type: 'SET_SHELF', payload: response.data })
    } catch (error) {
        console.log('error', error );
    }
}
function* shelfSaga () {
    yield takeLatest('GET_SHELF', getItems)
}

export default shelfSaga;