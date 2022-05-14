import {Button, ButtonProduct, ButtonEmployee, TitleList, Content, Showcase} from './style'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../../Providers/modal'
import Product from '../Product'
import { AdminContext } from "../../Providers/admin"

function AdminList () {
    const {setEmployee, setProduct} = useContext(ModalContext)

    const {listProducts, products} = useContext(AdminContext)

    useEffect(() => {
        listProducts()
    },[])
    
    return (
        <>
        <Content>
            <TitleList>Lista de Produtos</TitleList>
            <ButtonProduct onClick={() => setProduct(true)}>Adicionar Produto</ButtonProduct>
            <Showcase>
                {
                    products.map((response, index) => {
                        return <Product key={index} info={response}/>
                    })
                }
            </Showcase>
            <Button>Lançamento</Button>
            <ButtonEmployee onClick={() => setEmployee(true)}>Adicionar Funcionario</ButtonEmployee>
        </Content>
        </>
    )
}

export default AdminList