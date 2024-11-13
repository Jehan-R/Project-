import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import ProductList from './components/ProductList';
// import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Login from './components/Login'; // Import your page components
import Products from './components/Products'; // Import your page components
import Featured from './components/FeaturedProducts';
import './App.css'; // Optional: for global styling
import Combined from './components/Combined';
import Contact from './components/Contact';
import SignUp from './components/Signup';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Combined />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

