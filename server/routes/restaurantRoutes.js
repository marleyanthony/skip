const express = require('express');
const router = express.Router();
const restaurantData = require('../data/data.json');

//GET /restaurants responds with an array of all restaurants
router.get('/', (req, res) => {
    const allRestaurants = restaurantData.map(restaurant => {
        return {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.address,
            postal_code: restaurant.postal_code,
            stars_x: restaurant.stars_x,
            review_count: restaurant.review_count,
            img: restaurant.img,
        }
    })
    res.status(200).json(allRestaurants)
});

module.exports = router;