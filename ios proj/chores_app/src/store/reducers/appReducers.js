import { INDEX_LOADER, PLACE_LOADER, RECENT_LOADER, SET_LOCATION, SET_FAV } from '../actions/types'

const initialState = {
    power: 20,
}

const appReducers = (state = initialState, action) => {
    switch (action.type) {

        case SET_FAV:
            {
                return {
                    ...state, favPlace: action.val
                }
            }
        default:
            return state;

    }

}


export default appReducers;