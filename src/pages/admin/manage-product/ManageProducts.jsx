import useFetch from "../../../hooks/useFetch";
import Products from "../../../components/products/Products";
import { useState } from "react";

const ManageProducts = () => {
  const [reload, setReload] = useState(false);
  const { data, loading, error } = useFetch("/products", reload);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Manage Products</h2>
      <Products isAdmin={true} setReload={setReload} data={data} />
    </div>
  );
};

export default ManageProducts;
