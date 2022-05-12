import {Button, ButtonProduct, ButtonEmployee, TitleList, Content, Showcase} from './style'

import { useContext, useEffect } from 'react'
import { ModalContext } from '../../Providers/modal'
import Product from '../Product'
import { AdminContext } from "../../Providers/admin"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function AdminList () {
    const {setEmployee, setProduct} = useContext(ModalContext)

    const {listProducts, products} = useContext(AdminContext)

    const history = useHistory()

    useEffect(() => {
        listProducts()
    },[])

    function handleClick () {
        history.push('/releases')
    }
    
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
            <Button onClick={() => handleClick()}>Lançamento</Button>
            <ButtonEmployee onClick={() => setEmployee(true)}>Adicionar Funcionario</ButtonEmployee>
        </Content>
        </>
    )
}

export default AdminList