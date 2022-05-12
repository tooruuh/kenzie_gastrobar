import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";

export const RegisterContext = createContext([])

export const RegisterProviders = ({children}) => {

    const history = useHistory()

    function registerCompany (data) {
        api.post("/register", data)
        .then((response) => {
          toast.success('Conta criada com sucesso! ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          history.push("/login")
        })
        .catch((err) => {
          console.log(err)
          toast.error('Ocorreu um erro no registro!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
    }

    return (
        <RegisterContext.Provider
        value={{registerCompany}}>
         {children}
        </RegisterContext.Provider>
    )
}

export const useRegister = () => useContext(RegisterContext)