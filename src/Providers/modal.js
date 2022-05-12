import { createContext, useContext, useState } from "react";

export const ModalContext = createContext([])

export const ModalProviders = ({children}) => {
    
    const [employee, setEmployee] = useState(false)
    const [product, setProduct] = useState(false)
<<<<<<< HEAD
    const [tableOrder, setTableOrder] = useState(false)
    const [tableOrderId, setTableOrderId] = useState('')
    return (
        <ModalContext.Provider
        value={{employee, product, tableOrder, tableOrderId, setEmployee, setProduct, setTableOrder, setTableOrderId}}>
=======
    const [modalId, setModalId] = useState(false)

    return (
        <ModalContext.Provider
        value={{employee, product, modalId, setEmployee, setProduct, setModalId}}>
>>>>>>> 9bdd2a0837e936a8e599709a7d48b838f13ae17f
         {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)