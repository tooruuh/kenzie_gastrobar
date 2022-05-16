import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";
import { ModalContext } from "./modal";

export const AdminContext = createContext([]);

export const AdminProviders = ({ children }) => {
  const { setModalId, setProduct, setEmployee, setModalDelete } =
    useContext(ModalContext);

  const history = useHistory();

  const id = localStorage.getItem("@id");
  const userId = localStorage.getItem("@userId");

  const token = localStorage.getItem("@token");

  const [products, setProducts] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [listEmployee, setListEmployee] = useState([]);

  function handleLogout() {
    localStorage.clear();
    return window.location.reload(history.push("/login"));
  }

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
        listProducts(id);
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

  async function listProducts(id) {
    api
      .get(`/products?userId=${id}`)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {});
  }

  function deleteProduct(idProduct) {
    api
      .delete(`https://kenzie-gastrobar.herokuapp.com/products/${idProduct}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.info("Produto deletado");
        listProducts(id);
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

  async function updateEmployee(id, tableId) {
    if (token) {
      toast.error("Você não pode finalizar a mesa sendo um administrador.");
      return false;
    } else {
      const employee = await api
        .get(`/employees?id=${id}`)
        .then((res) => res.data[0]);

      const oldTotal = employee.totalSales;

      const products = await api
        .get(`/tables/${tableId}`)
        .then((res) => res.data.products);
      const total = products.reduce((a, b) => a + b.price, 0);
      api.put(`/employees/${id}`, {
        totalSales: oldTotal + total,
        userId: userId,
        name: employee.name,
        id: employee.id,
      });

      return true;
    }
  }

  function closeModal() {
    setEmployee(false);
    setModalId(true);
  }

  function DeleteEmployee(idEmployee) {
    api
      .delete(`/employees/${idEmployee}`)
      .then((response) => {
        toast.success("Funcionario Deletado");
        setModalDelete(false);
      })
      .catch((err) => {
        toast.error("Ocorreu um erro");
      });
  }

  function getEmployee() {
    api
      .get(`/employees?userId=${id}`)
      .then((response) => {
        setListEmployee(response.data);
      })
      .catch((err) => {
        toast.error("Erro ao tentar se conectar com servidor");
      });
  }

  return (
    <AdminContext.Provider
      value={{
        employeeId,
        registerEmployee,
        listEmployee,
        setListEmployee,
        getEmployee,
        DeleteEmployee,
        products,
        addProduct,
        deleteProduct,
        listProducts,
        handleLogout,
        updateEmployee,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
