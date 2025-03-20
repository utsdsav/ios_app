import { LOADING, ERROR, SPLASH_LOADED } from './types'

export const setLoading = (val) => (
    {
        type: LOADING,
        val: val
    }
)
export const setError = (val) => (
    {
        type: ERROR,
        val: val
    }
)
export const setSplashLoaded = (val) => (
    {
        type: SPLASH_LOADED,
        val: val
    }
)
