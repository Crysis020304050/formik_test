import {takeLatest} from 'redux-saga/effects'
import {authSaga} from "./authSaga.js";
import {logOutSaga} from "./logOutSaga";
import {ACTION_TYPES} from "../actions";

export default function* rootSaga () {
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, authSaga);
    yield takeLatest(ACTION_TYPES.USER_LOGOUT_REQUEST, logOutSaga);
}