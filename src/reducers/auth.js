import * as Types from '../constants/actionTypes';

const initState = {};

const auth = (state = initState, action) => {
    switch (action.type) {
        case Types.AUTHENTICATED:
            state = { ...action };
            return { ...state, authenticated: true };
        case Types.UN_AUTHENTICATED:
            state = { ...action };
            return { ...state, authenticated: false };
        case Types.AUTHENTICATED_ERROR:
            state = { ...action, authenticated: false };
            return { ...state };
        case Types.SIGN_UP_SUCCESS:
            state = { ...action };
            return { ...state, register: true };
        case Types.SIGN_UP_FAILD:
            state = { ...action };
            return { ...state, register: false };
        case Types.CLEAR_TOKEN:
            return { ...state, authenticated: false }
        default: return { ...state };
    }
}

export default auth;