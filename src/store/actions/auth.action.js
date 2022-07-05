import { URL_AUTH_SIGN_UP } from "../../constants/database/firebase";
import { authTypes } from "../types/auth.types";

const {  SIGN_UP} = authTypes;

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