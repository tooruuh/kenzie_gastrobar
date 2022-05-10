import Product from '../Product'
import {Button, ButtonProduct, ButtonEmployee, TitleList, Content, Showcase} from './style'

function AdminList () {
    return (
        <>
        <Content>
            <TitleList>Lista de Produtos</TitleList>
            <ButtonProduct>Adicionar Produto</ButtonProduct>
            <Showcase>
                <Product/>
                <Product/>
            </Showcase>
            <Button>Lançamento</Button>
            <ButtonEmployee>Adicionar Funcionario</ButtonEmployee>
        </Content>
        </>
    )
}

export default AdminList