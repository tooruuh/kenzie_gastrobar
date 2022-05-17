import { createContext, useContext, useState } from "react";
import { api } from "../Services/api";
import { AdminContext } from "./admin";
import { toast } from "react-toastify";

export const TablesContext = createContext();

export const TablesProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  
  const userId = localStorage.getItem("@userId");
  const id = localStorage.getItem("@id");
  const { updateEmployee } = useContext(AdminContext);
  const token = localStorage.getItem("@token");

  function addTable(table) {
    const tableExists = tables.find(
      (localTable) => table.numberTable === localTable.numberTable
    );
    if (tableExists) {
      updateTable(table.numberTable, table.products);
    } else {
      api.post(`/tables`, {
        userId: userId,
        table,
      });
      syncTables();
    }
  }

  async function removeTable(tableId) {
    const isAdmin = await updateEmployee(id, tableId);

    if (isAdmin) {
      api.delete(`/tables/${tableId}`);
      toast.success("Mesa finalizada.");
    }
    setTimeout(() => {
      syncTables();
    }, 300);
  }

  async function syncTables() {
    const tempUserId = localStorage.getItem("@userId");
    const tempId = localStorage.getItem("@id");
    await api
      .get(`/tables?userId=${token ? tempId : tempUserId}`)
      .then((res) => {
        setTables(res.data);
      });
  }

  function updateTable(numberTable, products) {
    const table = api.get(
      `/tables?numberTable=${numberTable}&userId=${userId}`
    );
    table.products = [...table.products, products];

    api.put(`/tables/${table.id}`, table);
    syncTables();
  }

  return (
    <TablesContext.Provider
      value={{ tables, addTable, removeTable, syncTables, updateTable }}
    >
      {children}
    </TablesContext.Provider>
  );
};
