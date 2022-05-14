import { createContext, useContext, useState, useEffect } from "react";
import { AdminContext } from "../Providers/admin"

export const ReleaseContext = createContext([])

export const ReleaseProvider = ({children}) => {

    const {listProducts, products} = useContext(AdminContext)

    useEffect(() => {
        listProducts()
    },[])

    const [currentSale, setCurrentSale] = useState([])

    function handleClick(section){

        const filter = products.filter((product) => product.section === section)

        setCurrentSale(filter)
        
        console.log(filter)
          
      }

return (

    <ReleaseContext.Provider
    value={{ handleClick, currentSale }}>
     {children}
    </ReleaseContext.Provider>
)
}
