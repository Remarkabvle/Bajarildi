import React, { useState, useEffect } from "react";
import axios from "../../api";
import "./products.scss";

const Products = ({ data, isAdmin }) => {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (reload) {
      window.location.reload();
    }
  }, [reload]);

  let handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          console.log(res); 
          setReload(!reload); 
        })
        .catch((err) => console.error(err));
    }
  };

  let productItems = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__top">
        <img className="products__img" src={el.url} alt={el.nomi} />
      </div>
      <h4>{el.nomi}</h4>
      <p>{el.narxi}</p>

      {isAdmin && (
        <>
          <button className="products__edit">Edit</button>
          <button
            className="products__delete"
            onClick={() => handleDelete(el.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  ));

  return (
    <div className="products">
      <div className="container products__container">{productItems}</div>
    </div>
  );
};

export default Products;
