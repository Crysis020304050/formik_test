import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../contants";
import http from './index.js';

const authenticateUser = async (url, data) => {
    try {
        const response = await http.post(url, data);
        const { data: {tokenPair: {accessToken, refreshToken}} } = response;
        sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        return response;
    } catch (e) {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        throw e;
    }
};

export const signInUser = async (data) => authenticateUser('/sign_in', data);
export const signUpUser = async (data) => authenticateUser('/sign_up', data);
export const signInUserByRefreshToken = async () => authenticateUser( '/refresh_sign_in', {
    refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY ),
} );
export const refreshTokens = async () => authenticateUser( '/refresh_tokens', {
    refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY ),
} );
export const deleteRefreshToken = async () => authenticateUser('delete_refresh_token', {
    refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY ),
});