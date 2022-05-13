import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";
import { ModalContext } from "./modal";

export const AdminContext = createContext([]);

export const AdminProviders = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [employeeId, setEmployeeId] = useState("");

  const id = localStorage.getItem("@id");
  const token = localStorage.getItem("@token");

  function handleLogout() {
    localStorage.clear();
    return window.location.reload(history.push("/login"));
  }

  const { setModalId, setProduct, setEmployee } = useContext(ModalContext);

  const history = useHistory();

  function addProduct(data) {
    const product = {
      name: data.name,
      price: data.price,
      section: data.section,
      userId: id,
    };

    api
      .post("/products", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Produto adicionado");
        listProducts();
        setProduct(false);
      })
      .catch((err) => {
        const res = err.response;
        console.log(res.data);
        if (res.data === "jwt expired") {
          localStorage.clear();
          toast.error("token espirado faça login novamente");
          history.push("/login");
        }
      });
  }

  async function listProducts() {
    const data = await api.get(`/products?userId=${id}`);
    setProducts(data.data);
  }

  function deleteProduct(id) {
    api
      .delete(`https://kenzie-gastrobar.herokuapp.com/products/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.info("Produto deletado");
        listProducts();
      });
  }

  async function registerEmployee(name) {
    const employee = {
      name: name,
      userId: id,
      totalSales: 0,
    };

    const response = await api.post("/employees", employee);

    const data = response.data;

    setEmployeeId(data.id);

    if (response.status === 201) {
      toast.success("Funcionario adicionado");
      closeModal();
    } else {
      toast.error("Ocorreu um erro ao cadastrar o funcionario");
    }
  }

  function closeModal() {
    setEmployee(false);
    setModalId(true);
  }

  return (
    <AdminContext.Provider
      value={{
        registerEmployee,
        employeeId,
        addProduct,
        deleteProduct,
        listProducts,
        products,
        handleLogout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
