import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {CardWrapper, CardImage, CardDetails, Title, Description} from './Style';

const card = (props) => {

	let navigateObj = {
		pathname: `/${props.city}/collection/${props.collectionId}`,
		state: {
			bannerImageUrl: props.cardImageUrl
		}
	}

	return (
		<CardWrapper>
			<Link to={navigateObj}>
				<CardImage imageLink={props.cardImageUrl} />
				<CardDetails>
					<Title>{props.title}</Title>
					<Description>{props.description}</Description>
				</CardDetails>
			</Link>
		</CardWrapper>
	);
}

export default card;