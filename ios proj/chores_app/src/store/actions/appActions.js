import { INDEX_LOADER, PLACE_LOADER, RECENT_LOADER, SET_FAV, SET_LOCATION } from './types';


export const indexLoader = (category,) => (
    {
        type: INDEX_LOADER,
        category: category,
    }
)
export const placeLoader = (places) => (
    {
        type: PLACE_LOADER,
        places: places,
    }
)
export const recentLoader = (recents) => (
    {
        type: RECENT_LOADER,
        recents: recents,
    }
)
export const setLocation = (location) => (
    {
        type: SET_LOCATION,
        location: location,
    }
)
export const setFavPlace = (fav) => (
    {
        type: SET_FAV,
        val: fav,
    }
)

