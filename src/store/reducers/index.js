import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	cityId: null,
	restaurantCollections: [],
	restaurantCategories: [],
	filteredRestaurants: [],
	restaurantDetails: {},
	restaurantReviews: {},
	cuisines: [],
	searchResults: [],
};

const getCityId = (state, action) => {
	return updateObject(state, {
		cityId: action.cityId
	});
}

const fetchRestaurantCollections = (state, action) => {
	return updateObject(state, {
		restaurantCollections: action.restaurantCollections
	});
}

const fetchRestaurantCategories = (state, action) => {
	return updateObject(state, {
		restaurantCategories: action.restaurantCategories
	});
}

const fetchFilteredRestaurants = (state, action) => {
	return updateObject(state, {
		filteredRestaurants: action.filteredRestaurants
	});
}

const fetchRestaurantDetails = (state, action) => {
	return updateObject(state, {
		restaurantDetails: action.data.restaurantDetails,
		restaurantReviews: action.data.restaurantReviews,
	});
}

const fetchCuisinesInCity = (state, action) => {
	return updateObject(state, {
		cuisines: action.cuisines
	});
}

const fetchSearchResults = (state, action) => {
	return updateObject(state, {
		searchResults: action.searchResults
	});
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_CITY_ID: {
			return getCityId(state, action);
		}
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
		case actionTypes.FETCH_CUISINES: {
			return fetchCuisinesInCity(state, action);
		}
		case actionTypes.FETCH_SEARCH_RESULTS: {
			return fetchSearchResults(state, action);
		}
		default: return state;
	}
};

export default reducer;