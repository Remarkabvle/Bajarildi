import React, { useState, useEffect } from "react";
import axios from "../../api";
import "./products.scss";
import EditProductModel from "../editProductModel/EditProductModel";



const Products = ({ data, isAdmin }) => {
  const [editProduct, setEditProduct] = useState(null)
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

  const handleEdit = (product) => {
    setEditProduct(product)
  }

  let productItems = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__top">
        <img className="products__img" src={el.url} alt={el.nomi} />
      </div>
      <h4>{el.nomi}</h4>
      <p>{el.narxi}</p>

      {isAdmin && (
        <>
          <button className="products__edit" onClick={() => handleEdit(el)}>Edit</button>
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
      {editProduct ? <EditProductModel data={editProduct} setData={setEditProduct}/> : <></>}
    </div>
  );
};

export default Products;
