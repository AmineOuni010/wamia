import './App.css';
import Categories from './components/categories/catergories';
import Navbar from './components/navbar/navbar';
import Products from './components/products/products';
import post1 from './assets/post1.jpg';
import React from 'react';
function App() {
  const [products, setProducts] = React.useState([
    {
      name: "Lunettes De Sécurité Noires INGCO",
      img: 'product1.png',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Paire Gants de Lavage réutilisables en Silicone",
      img: 'product2.jpeg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Support Pliable En Aluminium pour PC Portable & Notebook",
      img: 'product3.jpeg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Sacoche CODEX pour PC Portable 15.6",
      img: 'product4.png',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Kit D'éclairage de miroir 10 Ampoulées LED avec ventouse 5M",
      img: 'product5.jpg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "3 Lampes Anti Moustique Bleu & Rose & Vert",
      img: 'product6.jpg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Lunettes De Sécurité Noires INGCO",
      img: 'product1.png',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Paire Gants de Lavage réutilisables en Silicone",
      img: 'product2.jpeg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Support Pliable En Aluminium pour PC Portable & Notebook",
      img: 'product3.jpeg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Sacoche CODEX pour PC Portable 15.6",
      img: 'product4.png',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "Kit D'éclairage de miroir 10 Ampoulées LED avec ventouse 5M",
      img: 'product5.jpg',
      price: "20,000",
      oldPrice: "25,000",
    },
    {
      name: "3 Lampes Anti Moustique Bleu & Rose & Vert",
      img: 'product6.jpg',
      price: "20,000",
      oldPrice: "25,000",
    },

  ])
  return (

    <div className="App">
      <Navbar />

      <div className="container">
        <Categories />

        <div className="d-flex w-100" style={{ position: 'relative', overflowX: 'auto' }}>
          {/* Fixed width image */}
          <img
            src={post1}
            alt="post1"
            className="img-fluid"
            style={{ width: "226px", height: "418px", flexShrink: 0 }}
          />


          <Products data={products} />

        </div>
        <Products data={products} />

      </div>
    </div>


  );
}

export default App;
