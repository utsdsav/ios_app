import { LOADING, ERROR, SPLASH_LOADED } from '../actions/types'

const initialState = {
    err: false, loading: false, splashLoaded: false

}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOADING:
            {
                return { ...state, loading: action.val }
            }
        case ERROR:
            {
                return { ...state, err: action.val }
            }
        case SPLASH_LOADED:
            {
                return { ...state, splashLoaded: action.val }
            }
        default:
            return state;

    }
}



export default globalReducer;