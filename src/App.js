import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  const fetchBitcoinPrice = async () => {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      setBitcoinPrice(response.data.bpi.USD.rate);
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
    }
  };

  useEffect(() => {
    fetchBitcoinPrice();
  }, []); // Fetch Bitcoin price when component mounts

  const updatePrice = () => {
    fetchBitcoinPrice(); // Fetch Bitcoin price when button is clicked
  };

  return (
    <div className="App">
      <h1>Bitcoin Price</h1>
      <p>Current price: {bitcoinPrice ? `$${bitcoinPrice}` : 'Loading...'}</p>
      <button onClick={updatePrice}>Update Price</button>
    </div>
  );
}

export default App;
