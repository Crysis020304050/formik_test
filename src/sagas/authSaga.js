import {put} from 'redux-saga/effects'
import {signInUser, signUpUser, signInUserByRefreshToken} from "../api/auth.js";
import {ACTION_TYPES} from "../actions";

export function* authSaga(action) {
    try {
        const {data: {user}} = action.data
            ? action.data.formType
                ? yield signUpUser(action.data)
                : yield signInUser(action.data)
            : yield signInUserByRefreshToken();
        yield put({
            type: ACTION_TYPES.LOGIN_USER_SUCCESS,
            user: user,
        });
    } catch (e) {
        yield put({
            type: ACTION_TYPES.LOGIN_USER_ERROR,
            error: e,
        })
    }
}