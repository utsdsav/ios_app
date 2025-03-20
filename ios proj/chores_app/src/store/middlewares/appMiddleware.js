import api from '../../services/api';
import { setError, setLoading } from '../actions/globalActions'
import { indexLoader, placeLoader, recentLoader, setFavPlace, setLocation } from '../actions/appActions'
import * as Location from 'expo-location'

export const _getCategories = (token) => {

    return async (dispatch, getState) => {
        let res = await api.getCategories(token);
        dispatch(indexLoader(res.result))
    }
}
export const _getPlaces = (token, id) => {

    return async (dispatch, getState) => {
        let res = await api.getPlaces(token, id);
        if (res.success === 'true') {
            dispatch(placeLoader(res.result))
        }
        else {
            dispatch(setError({
                screenName: 'SelectLocation',
                message: res.message
            }))
        }
    }
}
export const _getAllPlaces = (token) => {

    return async (dispatch, getState) => {
        let res = await api.getAllPlaces(token);
        // console.log(res)
        if (res.success === 'true') {
            dispatch(placeLoader(res.result))
        }
        else {
            dispatch(setError({
                screenName: 'SelectLocation',
                message: res.message
            }))
        }
    }
}
export const _getRecentPlaces = (token, uid) => {

    return async (dispatch, getState) => {
        let res = await api.getRecentPlaces(token, uid);
        if (res.success === 'true') {
            dispatch(recentLoader(res.result))
        }
        else {
            dispatch(setError({
                screenName: 'Welcome',
                message: res.message
            }))
        }
    }
}

export const _getFavPlace = (token, uid) => {

    return async (dispatch, getState) => {
        let res = await api.getFavPlace(token, uid);

        if (res.success === 'true') {
            dispatch(setFavPlace(res.result))
        }
        else {
            dispatch(setError({
                screenName: 'Favourite',
                message: res.message
            }))
        }
    }
}

export const _getLocation = () => {

    return async (dispatch, getState) => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            dispatch(setError({
                screenName: 'Welcome',
                message: 'Location is required to use the app'
            }))

        }
        else {
            try {
                const location = await Location.getCurrentPositionAsync();
                let loc = [];
                loc[0] = location.coords.latitude
                loc[1] = location.coords.longitude
                dispatch(setLocation(loc))

            } catch (error) {
                dispatch(setError({
                    screenName: 'Welcome',
                    message: error.message
                }))
            }
        }
    }
}

