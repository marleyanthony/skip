import React from 'react';
import AllRestaurants from './AllRestaurants';
import axios from 'axios';

class Order extends React.Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    axios
    .get('http://localhost:8080/restaurants')
    .then(response => {
      console.log(response.data)
      this.setState({
        restaurants: response.data
      })
    })
    .catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <>
        <h1>List of Participating Restaurants</h1>
        {this.state.restaurants.map(restaurants => 
        <AllRestaurants
        restaurants={restaurants} 
        />
        )}
      </>
    )
  }
}

export default Order;
