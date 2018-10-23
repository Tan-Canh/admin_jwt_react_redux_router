import * as Types from '../constants/actionTypes';
import { apiCall } from './../utils/apiCall';

//login 
export const loginRequest = (userName, password, history) => {
    return async (dispatch) => {
        try {
            const res = await apiCall('/dang-nhap', 'POST', { userName, password })
            if (!res.data.err) {
                // console.log(res)
                dispatch(loginSuccess(res.data));
                // sessionStorage.setItem('token', res.data.token);
                history.push('/dashboard');
            } else {
                console.log(res.data)
                dispatch(loginFaild())
            }
        } catch (err) {
            dispatch(loginFailure())
        }
        // try {
        //     let data = { 
        //         userName, password
        //     };
        //     const signInResp = await SignInService(data);
        //     console.log({
        //         signInResp
        //     })
        // } catch (error) {
        //     console.log({
        //         error: error.message
        //     })
        // }
    }
}

export const loginSuccess = user => {
    return {
        type: Types.AUTHENTICATED,
        user
    }
}

export const loginFailure = () => {
    return {
        type: Types.AUTHENTICATED_ERROR,
        payload: 'Username or password wrong!'
    }
}

export const loginFaild = () => {
    return {
        type: Types.AUTHENTICATED_ERROR,
        payload: 'invalid username or password'
    }
}

//sign up
export const signUpRequest = (user, history) => {
    return async (dispatch) => {
        try {
            const res = await apiCall('/dang-ky', 'POST', user)
            // console.log('asasa');
            if (!res.data.error) {
                console.log(res.data)
                dispatch(signUpSuccess(res.data));
                // sessionStorage.setItem('user', res.data.token);
                history.push('/login');
            } else {
                console.log(res.data)
                dispatch(signUpFaild());
            }

        } catch (err) {
            dispatch(signUpFaild({ err: 'Sign Up Faild!' }))
        }
    }
}

export const signUpSuccess = user => {
    return {
        type: Types.SIGN_UP_SUCCESS,
        user
    }
}

export const signUpFaild = err => {
    return {
        type: Types.SIGN_UP_FAILD,
        err
    }
}

// export const getToken = token => {
//     return {
//         type: Types.AUTHENTICATED,
//         token
//     }
// }

export const clearToken = () => {
    // sessionStorage.clear();

    return {
        type: Types.CLEAR_TOKEN
    }
}