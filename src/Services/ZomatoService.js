import APIService from './APIService';

const getCityDetails = async (city) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
		method: 'GET'
	});
} 


const fetchRestaurantCollections = async (cityId) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/collections?city_id=${cityId}`,
		method: 'GET'
	});
}

export default {
	getCityDetails,
	fetchRestaurantCollections,
};