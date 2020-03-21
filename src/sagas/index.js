import {takeLatest} from 'redux-saga/effects'
import {authSaga} from "./authSaga.js";
import {ACTION_TYPES} from "../actions";

export default function* rootSaga () {
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, authSaga);
}