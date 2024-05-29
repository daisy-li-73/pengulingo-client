/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PageTopBar from '../PageTopBar';
// eslint-disable-next-line no-unused-vars
import ProgressBar from '../progress-bar/progress-bar';
/* Need to add in Progress Bar, not 100% sure that it's working */

function GoGoGroceries() {
  return (
    <div className="groceries-background-container">
      <PageTopBar />
      <div className="shelves">
        <img src="src/components/go-go-groceries/go-go-images/shelf-1.png" className="shelf-1" />
        <img src="src/components/go-go-groceries/go-go-images/shelf-2.png" className="shelf-2" />
        <img src="src/components/go-go-groceries/go-go-images/shelf-3.png" className="shelf-3" />
        <img src="src/components/go-go-groceries/go-go-images/shelf-4.png" className="shelf-4" />
      </div>
      <div className="ground">
        <img src="src/components/go-go-groceries/go-go-images/ground.png" className="checkered-ground" />
        <img src="src/components/go-go-groceries/go-go-images/Pengu-Cart.png" className="pengu" />
      </div>
      <img src="src/components/go-go-groceries/go-go-images/lights.png" className="lights" />
    </div>
  );
}

export default GoGoGroceries;
