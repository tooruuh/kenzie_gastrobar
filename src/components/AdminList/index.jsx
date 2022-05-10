import Product from '../Product'
import {Button, ButtonProduct, ButtonEmployee, TitleList, Content, Showcase} from './style'

function AdminList ({setIsOpen, setModal}) {
    return (
        <>
        <Content>
            <TitleList>Lista de Produtos</TitleList>
            <ButtonProduct onClick={() => setIsOpen(true)}>Adicionar Produto</ButtonProduct>
            <Showcase>
                <Product/>
                <Product/>
            </Showcase>
            <Button>Lançamento</Button>
            <ButtonEmployee onClick={() => setModal(true)}>Adicionar Funcionario</ButtonEmployee>
        </Content>
        </>
    )
}

export default AdminList