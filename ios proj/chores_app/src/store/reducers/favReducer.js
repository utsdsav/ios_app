import { ACTION_TYPES } from '../actions/actionTypes';
// import update from 'immutability-helper';

const initialState = {
    favouritesItems: [],
};

export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_FAV:
            {
                let favs = []
                let allProducts = state?.favouritesItems;
                if (allProducts.length > 0) {
                    let modifier = allProducts?.findIndex((product) => {
                        return product?.itemID == action?.payload?.itemID;
                    });
                    if (modifier !== -1 && allProducts?.length) {
                        // alert('asdasdxs')
                    }
                    else {
                        return {
                            ...state,
                            favouritesItems: state.favouritesItems.concat(action.payload)
                        }
                    }
                }
                else {
                    return {
                        ...state,
                        favouritesItems: favs.concat(action.payload)
                    }
                }

                // return {
                //     ...state,
                //     favouritesItems: []
                // }
            }
        // case ACTION_TYPES.ADD_QUANTITY_TO_CART: {
        //     return {
        //         ...state,
        //         products: state.products.map(pro =>
        //             pro.itemID === action.payload.itemID ? { ...pro, itemQuantity: action.payload.itemQuantity } : pro
        //         )
        //     };
        // }
        case ACTION_TYPES.GET_FAV:
            return {
                ...state,
                favouritesItems: action.payload,
            }
        // case ACTION_TYPES.GET_FAV:
        //     {
        //         return Object.assign({}, state, {
        //             products: action.payload,
        //         });

        //     }
        case ACTION_TYPES.DELETE_FAV:
            {
                return {
                    ...state,
                    favouritesItems: state.favouritesItems.filter(item => item.favID !== action.payload),
                }
            }
        default:
            return state;
    }
};
