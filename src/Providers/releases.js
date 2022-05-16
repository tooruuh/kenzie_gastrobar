import { createContext, useContext, useState, useEffect } from "react";
import { AdminContext } from "../Providers/admin"
import { api } from "../Services/api";

export const ReleaseContext = createContext([])

export const ReleaseProvider = ({children}) => {

    const userId = localStorage.getItem('@userId')

    const token = localStorage.getItem('@token')

    const id = localStorage.getItem('@id')

    const { products} = useContext(AdminContext)

    const [productsRealeases, setProductsRealeases] = useState([])

    const [filterProducts, setfilterProducts] = useState([])

    function handleClick(section){

        const filter = products.filter((product) => product.section === section)

        setfilterProducts(filter)
        
        console.log(filter)
          
    }

    async function listProducts () {
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
