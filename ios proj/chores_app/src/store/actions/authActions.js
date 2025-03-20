import { LOGIN, REGISTRATION, LOGOUT, UPDATE_INFO, SET_DEVICE_SETUP, SET_LOGGED, UPDATE_STORE_CONFIG, EXTRA_BOOL } from './types';


export const login = (token, info) => (
    {
        type: LOGIN,
        token: token,
        info: info,
    }
)

export const logout = () => (
    {
        type: LOGOUT
    }
)

export const updateInfo = (info) => (
    {
        type: UPDATE_INFO,
        info: info
    }
)
export const setLogged = (info) => (
    {
        type: SET_LOGGED,
        val: info
    }
)
export const setDeviceSetup = (info) => (
    {
        type: SET_DEVICE_SETUP,
        val: info
    }
)

export const userExtra = (payload) => (
    {
        type: EXTRA_BOOL,
        payload,
    }
);

export const updateStoreConfig = (payload) => (
    {
        type: UPDATE_STORE_CONFIG,
        payload: payload
    }
)
