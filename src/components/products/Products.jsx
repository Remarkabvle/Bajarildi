import React, { useState, useEffect } from "react";
import axios from "../../api";
import "./products.scss";
import EditProductModal from "../editProductModel/EditProductModel";


const Products = ({ data, isAdmin, setReload }) => {
  const [editProduct, setEditProduct] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`/products/${id}`)
        .then(() => {
          setReload((prev) => !prev);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const productItems = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__top">
        <img className="products__img" src={el.url} alt={el.nomi} />
      </div>
      <h4>{el.nomi}</h4>
      <p>{el.narxi}</p>
      {isAdmin && (
        <>
          <button className="products__edit" onClick={() => handleEdit(el)}>Edit</button>
          <button className="products__delete" onClick={() => handleDelete(el.id)}>Delete</button>
        </>
      )}
    </div>
  ));

  return (
    <div className="products">
      <div className="container products__container">{productItems}</div>
      {editProduct && <EditProductModal data={editProduct} setData={setEditProduct} setReload={setReload} />}
    </div>
  );
};

export default Products;
