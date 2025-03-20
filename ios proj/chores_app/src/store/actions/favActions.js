import { ACTION_TYPES } from './actionTypes';

const addFav = (payload) => ({
    type: ACTION_TYPES.ADD_FAV,
    payload,
});

const deleteFav = (payload) => ({
    type: ACTION_TYPES.DELETE_FAV,
    payload,
});
const getFav = (payload) => ({
    type: ACTION_TYPES.GET_FAV,
    payload,
});



export default {
    addFav,
    deleteFav,
    getFav,
};
