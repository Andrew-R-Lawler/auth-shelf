import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
//import { response } from 'express';

function* shelfSaga(){
    yield takeEvery('GET_SHELF', getItems);
    yield takeEvery('DELETE_ITEM', deleteItem);
    yield takeEvery('ADD_ITEM', addItem);
}

function* getItems() {
    try {
        const itemsResponse = yield axios.get('/api/shelf')
        yield put({ type: 'SET_SHELF', payload: itemsResponse })
    } catch (error) {
        console.log( 'error', error );
    }
}

function* addItem(action){
    try {
        yield axios.post('/api/shelf', action.payload)
        yield put({ type: 'GET_SHELF' })
    } catch (error) {
        console.log( 'error', error);
    }
}

function* deleteItem(action){
    try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({type: 'GET_SHELF'})
    }catch(error){
        console.log(error)
    }
}

export default shelfSaga;