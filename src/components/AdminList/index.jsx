import {Button, ButtonProduct, ButtonEmployee, TitleList, Content, Showcase} from './style'

import { useContext } from 'react'
import { ModalContext } from '../../Providers/modal'
import Product from '../Product'

function AdminList () {
    const {setEmployee, setProduct} = useContext(ModalContext)
    return (
        <>
        <Content>
            <TitleList>Lista de Produtos</TitleList>
            <ButtonProduct onClick={() => setProduct(true)}>Adicionar Produto</ButtonProduct>
            <Showcase>
                <Product/>
                <Product/>
            </Showcase>
            <Button>Lançamento</Button>
            <ButtonEmployee onClick={() => setEmployee(true)}>Adicionar Funcionario</ButtonEmployee>
        </Content>
        </>
    )
}

export default AdminList