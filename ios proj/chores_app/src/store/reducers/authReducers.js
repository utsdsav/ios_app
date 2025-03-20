import { LOGIN, LOGOUT, UPDATE_USER, UPDATE_STORE_CONFIG, SET_LOGGED, SET_DEVICE_SETUP, BARCODE, SLIDER, SLIDER_POWER, CYCLE_BATCH, OTHER_BATCH } from '../actions/types'

const initialState = {
    logged: false, token: '', user: [], storeID: '', storeConfig: {}, deviceSetup: false, barcode: false, slider: 0, sliderPower: 220,
    cycleBatch: 1, otherBatch: 5
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true, token: action.token, info: action.info,
                }
            }
        case UPDATE_USER:
            {
                return {
                    ...state, user: action.payload
                }
            }
        case SET_LOGGED:
            {
                return {
                    ...state, logged: action.val
                }
            }
        case SET_DEVICE_SETUP:
            {
                return {
                    ...state, deviceSetup: action.val
                }
            }
        case UPDATE_STORE_CONFIG:
            {
                return {
                    ...state, storeConfig: action.payload
                }
            }

        case LOGOUT:
            {
                return {
                    ...state, logged: false,
                }
            }
        case BARCODE:
            {
                return {
                    ...state, barcode: action.val
                }
            }
        case SLIDER:
            {
                return {
                    ...state, slider: action.val
                }
            }
        case SLIDER_POWER:
            {
                return {
                    ...state, sliderPower: action.val
                }
            }
        case CYCLE_BATCH:
            {
                return {
                    ...state, cycleBatch: action.val
                }
            }
        case OTHER_BATCH:
            {
                return {
                    ...state, otherBatch: action.val
                }
            }


            break;
        default:
            return state;

    }


}

export default authReducers;