import { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";

export const RegisterContext = createContext([])

export const RegisterProviders = ({children}) => {

    const history = useHistory()

    function registerCompany (data) {
      const loading = toast.loading("Carregando...")

        api.post("/register", data)
        .then((response) => {

          toast.update(loading, {render: "Conta registrada !", autoClose: 1000, type: "success", isLoading: false});

          history.push("/login")
        })
        .catch((err) => {
          console.log(err)

          toast.update(loading, {render: "Ocorreu um erro ao registrar", autoClose: 1000 , type: "error", isLoading: false });
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