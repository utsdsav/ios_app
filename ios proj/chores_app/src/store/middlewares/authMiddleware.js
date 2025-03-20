// import api from '../../services/api';
import { login, updateInfo } from '../actions/authActions'
import { setLoading, setError } from '../actions/globalActions'
// import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-community/async-storage';

export const _login = (email, pass) => {

    return async (dispatch, getState) => {
        dispatch(setLoading(true))
        let res = await api.loginUser(email, pass);
        if (res.success === 'false' || res.message === 'Auth failed') {
            alert(res.message)
        }
        else {
            let info = jwt_decode(res.token)

            await AsyncStorage.setItem('token', res.token)
            await AsyncStorage.setItem('info', JSON.stringify(info))

            dispatch(login(res.token, info))
        }

        dispatch(setLoading(false));
    }
}

export const _register = (name, phone, email, pass, gender, dob) => {

    return async (dispatch, getState) => {

        dispatch(setLoading(true))
        let res = await api.registerUser(name, phone, email, pass, gender, dob);

        if (res.success === 'true') {
            dispatch(_Login(email, pass))
        }
        else {
            let data = {
                success: 'false',
                message: res.message,
            }
            dispatch(setError(data))
        }
        dispatch(setLoading(false));
    }
}


export const _sendEmail = (email, num) => {

    return async (dispatch, getState) => {
        let res = await api.sendEmail(email, num)
    }
}

export const _setNewPass = (email, pass) => {

    return async (dispatch, getState) => {

        dispatch(setLoading(true))
        let res = await api.setNewPassword(email, pass);
        //  console.log(res)
        if (res.result !== null) {
            dispatch(setError({
                screenName: 'ForgotPassword',
                message: 'ok'
            }))
        }
        else {
            dispatch(setError(res.message))
        }
        dispatch(setLoading(false));
    }
}

export const _editUser = (id, token, name, phone, gender, dob, info) => {

    return async (dispatch, getState) => {

        dispatch(setLoading(true))

        let res = await api.editUser(id, token, name, phone, gender, dob);
        alert(res.message)
        if (res.success === 'true') {
            dispatch(setError({ screenName: 'Setting', }))
            await AsyncStorage.setItem('info', JSON.stringify(info))
        }

        dispatch(setLoading(false));
    }
}



