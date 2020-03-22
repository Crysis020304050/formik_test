import {put} from 'redux-saga/effects'
import {deleteRefreshToken} from "../api/auth.js";
import {ACTION_TYPES} from "../actions";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../contants";

export function* logOutSaga(action) {
    try {
        yield deleteRefreshToken();
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    } catch (e) {
        yield put({
            type: ACTION_TYPES.USER_LOGOUT_ERROR,
            error: e,
        })
    }
}