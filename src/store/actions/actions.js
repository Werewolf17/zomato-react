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

export default {
	fetchRestaurantCollections,
	fetchRestaurantCategories
}