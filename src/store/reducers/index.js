import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	restaurantCollections: [],
	restaurantCategories: [],
	filteredRestaurants: [],
	restaurantDetails: {}
};

const fetchRestaurantCollections = (state, action) => {
	return updateObject(state, {
		restaurantCollections: {action}
	});
}

const fetchRestaurantCategories = (state, action) => {
	return updateObject(state, {
		restaurantCategories: {action}
	});
}

const fetchFilteredRestaurants = (state, action) => {
	return updateObject(state, {
		filteredRestaurants: {action}
	});
}

const fetchRestaurantDetails = (state, action) => {
	return updateObject(state, {
		restaurantDetails: {action}
	});
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_COLLECTIONS: {
			return fetchRestaurantCollections(state, action);
		}
		case actionTypes.FETCH_CATEGORIES: {
			return fetchRestaurantCategories(state, action);
		}
		case actionTypes.FETCH_FILTERED_RESTAURANTS: {
			return fetchFilteredRestaurants(state, action);
		}
		case actionTypes.FETCH_RESTAURANT_DETAILS: {
			return fetchRestaurantDetails(state, action);
		}
		default: return state;
	}
};

export default reducer;