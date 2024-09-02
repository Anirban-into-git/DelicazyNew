import React, { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Check if food_list exists and is an array
  if (!Array.isArray(food_list)) {
    return <div className="food-display-error">Error loading food items. Please try again later.</div>;
  }

  const filteredList = food_list.filter(
    item => category === "All" || category === item.category
  );

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      {filteredList.length > 0 ? (
        <div className='food-display-list'>
          {filteredList.map(item => (
            <FoodItem 
              key={item._id} 
              image={item.image} 
              name={item.name} 
              desc={item.description} 
              price={item.price} 
              id={item._id} 
            />
          ))}
        </div>
      ) : (
        <div className="food-display-no-items">No food items available for this category.</div>
      )}
    </div>
  );
};

export default FoodDisplay;
