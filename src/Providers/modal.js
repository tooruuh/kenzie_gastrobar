import { createContext, useState } from "react";

export const ModalContext = createContext([])

export const ModalProviders = ({children}) => {
    
    const [employee, setEmployee] = useState(false)
    const [product, setProduct] = useState(false)
    const [modalId, setModalId] = useState(false)

    return (
        <ModalContext.Provider
        value={{employee, product, modalId, setEmployee, setProduct, setModalId}}>
         {children}
        </ModalContext.Provider>
    )
}