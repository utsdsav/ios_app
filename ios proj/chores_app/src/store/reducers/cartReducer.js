import { ACTION_TYPES } from '../actions/actionTypes';
// import update from 'immutability-helper';

const initialState = {
    products: [
        {
            "selectedAssign": "Darren",
            "taskName": "Take Out Trash"
        },
        {
            "selectedAssign": "Eloy",
            "taskName": "Clean Fridge"
        },
        {
            "selectedAssign": "Utsav",
            "taskName": "Clean Kitchen Floor"
        }
    ],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            {
                return {
                    ...state,
                    // products: []
                    products: state.products.concat(action.payload)

                }
            }
        case ACTION_TYPES.ADD_QUANTITY_TO_CART: {
            return {
                ...state,
                products: state.products.map(pro =>
                    pro.itemID === action.payload.itemID ? { ...pro, itemQuantity: action.payload.itemQuantity } : pro
                )
            };
        }
        case ACTION_TYPES.REMOVE_TO_CART: return {
            ...state,
            products: [],
        }
        case ACTION_TYPES.REMOVE_ITEM_CART:
            return {
                ...state,
                products: state.products.filter(item => item.itemID !== action.payload.itemID),
            }
        /**xw
         * Now save the newly modified array of all orders 
         * into our redux store
         */
        default:
            return state;
    }
};
