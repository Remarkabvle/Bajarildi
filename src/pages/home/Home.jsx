import React from "react";
import Products from "../../components/products/Products";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer";
import "./Home.scss"; 

const Home = () => {
  let { data, loading, error } = useFetch("/products");

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Discover our exclusive collection of products.</p>
        </div>
      </section>
      <div className="content">
        <h2 className="home-title">Our Products</h2>
        {loading && <p className="home-loading">Loading products...</p>}
        {error && <p className="home-error">Failed to load products: {error.message}</p>}
        {!loading && !error && <Products data={data} />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
