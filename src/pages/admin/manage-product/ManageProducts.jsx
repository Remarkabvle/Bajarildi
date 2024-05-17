import useFetch from "../../../hooks/useFetch";
import Products from "../../../components/products/Products";
import { useState } from "react";

const ManageProducts = () => {
  const [reload, setReload] = useState(true)
  let { data, loading, error } = useFetch("/products", reload);

  return (
    <div>
      <h2>ManageProducts</h2>
      <Products  setReload={setReload} isAdmin={true} data={data} />
    </div>
  );
};

export default ManageProducts;
