import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
//import { response } from 'express';

function* shelfSaga(){
    yield takeEvery('GET_SHELF', getItems);
    yield takeEvery('REMOVE_ITEM', deleteItem);
}

function* getItems() {
    try {
        const itemsResponse = yield axios.get('/api/shelf')
        yield put({ type: 'SET_SHELF', payload: itemsResponse })
    } catch (error) {
        console.log( 'error', error );
    }
}

function* deleteItem(){
    try {
        yield axios.delete(`/api/shelf/${id}`)
        yield put({type: 'GET_SHELF'})
    }catch(error){
        console.log(error)
    }
}

export default shelfSaga;