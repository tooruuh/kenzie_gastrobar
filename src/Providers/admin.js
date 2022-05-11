import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";

export const AdminContext = createContext([])

export const AdminProviders = ({children}) => {

    function addProduct () {
        
    }
    return (
        <AdminContext.Provider
        value={{}}>
         {children}
        </AdminContext.Provider>
    )
}