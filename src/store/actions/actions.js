import ZomatoService from '../../services/ZomatoService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');

const fetchRestaurantCollections = (city) => async (dispatch) => {
	let	cityId, 
		cityDetails, 
		restaurantCollections;

	cityDetails = await ZomatoService.getCityDetails(city).catch((e) => {
		console.log(`There was an error fetching city details for: ${city}`);
	});
	cityId = _.get(cityDetails, 'data.location_suggestions[0].id');
	restaurantCollections = await ZomatoService.fetchRestaurantCollections(cityId).catch((e) => {
		console.log(`There was an error fetching restaurant collections in: ${city}`);
	});

	dispatch({
		type: actionTypes.FETCH_COLLECTIONS,
		restaurantCollections: _.get(restaurantCollections, 'data.collections')
	});
}

const fetchRestaurantCategories = () => async (dispatch) => {
	let restaurantCategories = await ZomatoService.fetchRestaurantCategories().catch((e) => {
		console.log('There was an error fetching categories or restaurant types.')
	});

	dispatch({
		type: actionTypes.FETCH_CATEGORIES,
		restaurantCategories: _.get(restaurantCategories, 'data.categories')
	});
}

const fetchFilteredRestaurants = (searchQuery) => async (dispatch) => {
	let filteredRestaurants = await ZomatoService.fetchFilteredRestaurants(searchQuery).catch((e) => {
		console.log('There was an error fetching filtered list of restaurants.');
	});

	dispatch({
		type: actionTypes.FETCH_FILTERED_RESTAURANTS,
		filteredRestaurants: _.get(filteredRestaurants, 'data.restaurants')
	});
}

const fetchRestaurantDetails = (restaurantId) => async (dispatch) => {
	let restaurantDetails = await ZomatoService.fetchRestaurantDetails(restaurantId).catch((e) => {
		console.log(`There was an error fetching restaurant details. Restaurant Id: ${restaurantId}`);
	});

	dispatch({
		type: actionTypes.FETCH_RESTAURANT_DETAILS,
		restaurantDetails: _.get(restaurantDetails, 'data')
	});
}

export default {
	fetchRestaurantCollections,
	fetchRestaurantCategories,
	fetchFilteredRestaurants,
	fetchRestaurantDetails
}