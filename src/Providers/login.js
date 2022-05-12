import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";

export const LoginContext = createContext([])

export const LoginProviders = ({children}) => {

    const history = useHistory()
    
    function loginEmployee (id) {
        api.get(`employees?id=${id}`)
        .then((data) => {
            localStorage.clear()

            const person = data.data[0]

            localStorage.setItem('@userId', person.userId)
            localStorage.setItem('@userName', person.name)
            localStorage.setItem('@id', person.id)

            toast.success('Sucesso !')

            history.push('/table')
        })
        .catch((err) => {
            console.log('erro:' + err)
            toast.error('Usuario não encontrado')
        })
    }

    function loginCompany (data) {
        api.post("/login", data)
        .then((response) => {
            localStorage.clear()
            
            const {user} = response.data

            const {accessToken} = response.data

            localStorage.setItem('@token',accessToken)
            localStorage.setItem('@userName', user.name)
            localStorage.setItem('@id', user.id)

            toast.success('Sucesso !')

            history.push('/admin')
        })
        .catch((err) => {
            console.log(err);
            toast.error('Empresa não encontrado')
        });
    }
 
    return (
        <LoginContext.Provider
        value={{ loginCompany, loginEmployee }}>
         {children}
        </LoginContext.Provider>
    )
}