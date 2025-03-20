import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
    store: {},
};

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_STORE:
            return {
                ...state,
                store: action.payload,
            }
        case ACTION_TYPES.REMOVE_STORE:
            {
                return {
                    ...state,
                    store: {},
                }
            }
        /**xw
         * Now save the newly modified array of all orders 
         * into our redux store
         */
        default:
            return state;
    }
};
