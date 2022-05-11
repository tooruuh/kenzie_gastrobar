import { createContext, useState } from "react";
import { api } from "../Services/api";

export const TablesContext = createContext();

export const TablesProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  const userId = localStorage.getItem("@gastro/ID");

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

  function removeTable(tableId) {
    api.delete(`/tables/${tableId}`);
    syncTables();
  }

  function syncTables() {
    const updatedTables = api.get(`/tables?userId=${userId}`);
    setTables(updatedTables);
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
