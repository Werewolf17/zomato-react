import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import _ from 'lodash';

import Actions from '../../store/actions/actions';

import classes from './Style.css';

// Components
import Banner from '../../hoc/Banner/Banner';
import { Wrapper, BannerWrapper, BannerDetails, Title, Description, Rating } from './Style';

class Restaurant extends Component{

	componentDidMount(){
		let restaurantId = this.props.match.params.restaurantId;
		this.props.fetchRestaurantDetails(restaurantId);
	}

	render(){
		let restaurantDetails 		= this.props.restaurantDetails,
			restaurantReviews		= this.props.restaurantReviews,
			restaurantName 			= _.get(restaurantDetails, 'name', ''),
			restaurantLocation 		= _.get(restaurantDetails, 'location.locality_verbose', ''),
			bannerImageUrl			= _.get(restaurantDetails, 'featured_image', ''),
			cuisines 				= _.get(restaurantDetails, 'cuisines', ''),
			voteCount				= _.get(restaurantDetails, 'user_rating.votes', ''),
			ratingColor 			= _.get(restaurantDetails, 'user_rating.rating_color', ''),
			aggregateRating 		= _.get(restaurantDetails, 'user_rating.aggregate_rating', '');

		return (
			<Wrapper>
				<BannerWrapper>
					<Banner bannerImageUrl={bannerImageUrl} bannerHeight={'300px'} />
					<BannerDetails>
						<Title>{restaurantName}</Title>
						<Description>
							{restaurantLocation}&emsp;{cuisines}
						</Description>

						<div className={classes.RatingWrapper}>
							<Rating ratingColor={ratingColor}>
								{aggregateRating}<span className={classes.MaxRating}>/5</span>
							</Rating>
							<div className={classes.VoteCount}>{voteCount} votes</div>
						</div>
					</BannerDetails>
				</BannerWrapper>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
    return {
    	restaurantDetails: _.get(state, 'zomatoReducer.restaurantDetails', {}),
    	restaurantReviews: _.get(state, 'zomatoReducer.restaurantReviews', {}),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurantDetails: (restaurantId) => dispatch(Actions.fetchRestaurantDetails(restaurantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);