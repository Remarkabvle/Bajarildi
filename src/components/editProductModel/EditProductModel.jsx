import React from "react";
import "./edit.scss";
import axios from "../../api";

const EditProductModal = ({ data, setData, setReload }) => {
  const handleUpdatedProduct = (e) => {
    e.preventDefault();
    const updateProduct = {
      narxi: data.narxi,
      nomi: data.nomi,
    };
    axios
      .put(`/products/${data.id}`, updateProduct)
      .then(() => {
        setData(null);
        setReload((prev) => !prev);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div onClick={() => setData(null)} className="overlay"></div>
      <form onSubmit={handleUpdatedProduct} className="edit-product-modal">
        <h2>Edit</h2>
        <input
          type="text"
          value={data.nomi}
          onChange={(e) =>
            setData((prev) => ({ ...prev, nomi: e.target.value }))
          }
        />
        <input
          type="text"
          value={data.narxi}
          onChange={(e) =>
            setData((prev) => ({ ...prev, narxi: e.target.value }))
          }
        />
        <button type="button" onClick={() => setData(null)}>Close</button>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default EditProductModal;
