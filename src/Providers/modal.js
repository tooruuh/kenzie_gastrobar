import { createContext, useContext, useState } from "react";

export const ModalContext = createContext([])

export const ModalProviders = ({children}) => {
    
    const [employee, setEmployee] = useState(false)
    const [product, setProduct] = useState(false)
    const [tableOrder, setTableOrder] = useState(false)
    const [tableOrderId, setTableOrderId] = useState('')
    const [modalId, setModalId] = useState(false)

    return (
        <ModalContext.Provider
        value={{employee, product, tableOrder, tableOrderId, modalId, setEmployee, setProduct, setTableOrder, setTableOrderId, setModalId}}>
         {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)