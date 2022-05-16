import { createContext, useContext, useState, useEffect } from "react";
import { AdminContext } from "../Providers/admin"
import { api } from "../Services/api";

export const ReleaseContext = createContext([])

export const ReleaseProvider = ({children}) => {

    const token = localStorage.getItem('@token')

    const [productsRealeases, setProductsRealeases] = useState([])

    const [filterProducts, setfilterProducts] = useState([])

    function handleClick(section){

        const filter = productsRealeases.filter((product) => product.section === section)

        setfilterProducts(filter)
        
        console.log(filter)
          
    }

    async function listProducts (id, userId) {
        if (token) {
            const data = await api.get(`/products?userId=${id}`);
            setProductsRealeases(data.data);
        } else {
            const data = await api.get(`/products?userId=${userId}`);
            setProductsRealeases(data.data);
        }
    }

return (

    <ReleaseContext.Provider
    value={{ handleClick, filterProducts, listProducts, productsRealeases }}>
     {children}
    </ReleaseContext.Provider>
)
}
