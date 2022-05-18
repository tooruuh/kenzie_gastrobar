import { createContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";

export const LoginContext = createContext([]);

export const LoginProviders = ({ children }) => {
  const history = useHistory();

  function loginEmployee(id) {

    const loading = toast.loading("Carregando...")

    api
      .get(`employees?id=${id}`)
      .then((data) => {
        localStorage.clear();

        const person = data.data[0];

        localStorage.setItem("@userId", person.userId);
        localStorage.setItem("@userName", person.name);
        localStorage.setItem("@id", person.id);

        toast.update(loading, {render: "Sucesso !", autoClose: 1000, type: "success", isLoading: false});

        history.push("/releases");
      })
      .catch((err) => {
        console.log("erro:" + err);
        toast.update(loading, {render: "Usuario não encontrado", autoClose: 1000 , type: "error", isLoading: false });
      });
  }

  async function loginCompany(data) {
    const loading = toast.loading("Carregando...")
    await api.post("/login", data)
      .then((response) => {
        localStorage.clear();

        const { user } = response.data;

        const { accessToken } = response.data;

        localStorage.setItem("@token", accessToken);
        localStorage.setItem("@userName", user.name);
        localStorage.setItem("@id", user.id);

        toast.update(loading, {render: "Sucesso !", autoClose: 1000, type: "success", isLoading: false});
        
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);

        toast.update(loading, {render: "Conta não encontrada", autoClose: 1000 , type: "error", isLoading: false });
      });
      
     
    
  }

  return (
    <LoginContext.Provider value={{ loginCompany, loginEmployee }}>
      {children}
    </LoginContext.Provider>
  );
};
