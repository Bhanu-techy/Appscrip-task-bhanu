import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import axios from 'axios';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('API error:', error));
  }, [])

  return (
    <div className="App">
      <Header/>
      <hr/>
      <ProductGrid products={products}/>
      <Footer/>
    </div>
  )
}

export default App;
