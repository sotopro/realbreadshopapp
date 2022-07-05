import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constants/database/firebase";
import { authTypes } from "../types/auth.types";

const {  SIGN_UP, SIGN_IN} = authTypes;

export const signup = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });
            const data = await response.json();
            console.log('data Firebase', data);
            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });
            const data = await response.json();
            console.log('data Firebase', data);
            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            console.log(error);
        }
    }
}