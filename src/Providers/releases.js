import { createContext, useState } from "react";
import { api } from "../Services/api";

export const ReleaseContext = createContext([]);

export const ReleaseProvider = ({ children }) => {
  const token = localStorage.getItem("@token");

  const [productsRealeases, setProductsRealeases] = useState([]);

  const [filterProducts, setfilterProducts] = useState([]);

  const [productsRender, setProductsRender] = useState([]);

  function handleClick(section) {
    const filter = productsRealeases.filter(
      (product) => product.section === section
    );

    if (filter.length === 0) {
      setfilterProducts([]);
      setProductsRender([]);
    } else {
      setfilterProducts(filter);
    }
  }

  function handleTotalProducts() {
    const filter = productsRealeases.filter((product) => product);

    setfilterProducts(filter);
  }

  async function listProducts(id, userId) {
    if (token) {
      const data = await api.get(`/products?userId=${id}`);
      setProductsRender(data.data);
      setProductsRealeases(data.data);
    } else {
      const data = await api.get(`/products?userId=${userId}`);
      setProductsRender(data.data);
      setProductsRealeases(data.data);
    }
  }

  return (
    <ReleaseContext.Provider
      value={{
        handleClick,
        filterProducts,
        listProducts,
        productsRealeases,
        handleTotalProducts,
        productsRender,
      }}
    >
      {children}
    </ReleaseContext.Provider>
  );
};
