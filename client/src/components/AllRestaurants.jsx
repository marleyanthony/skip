import React from 'react';

const AllRestaurants = (props) => {
    return(
        <>
        <h2>{props.restaurants.name}</h2>
        <p>{props.restaurants.address}</p>
        <p>{props.restaurants.postal_code}</p>
        <p>{props.restaurants.stars_x} Stars</p>
        <p>{props.restaurants.review_count} Reviews</p>
        </>
    )
}

export default AllRestaurants;

