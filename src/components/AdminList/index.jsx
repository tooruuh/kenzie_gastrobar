import { TitleList, Content, Showcase} from './style'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../../Providers/modal'
import Button from "../Button";
import Product from '../Product'
import { AdminContext } from "../../Providers/admin"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function AdminList () {
    const {setEmployee, setProduct} = useContext(ModalContext)

    const {listProducts, products} = useContext(AdminContext)

    const history = useHistory()

    const id = localStorage.getItem('@id')

    useEffect(() => {
        listProducts(id)
    },[])

    function handleClick () {
        history.push('/releases')
    }
    
    return (
        <>
        <Content>
            <TitleList>Lista de Produtos</TitleList>
            <Button className='btn-product' onClick={() => setProduct(true)}>Adicionar Produto</Button>
            <Showcase>
                {
                    products.map((response, index) => {
                        return <Product key={index} info={response}/>
                    })
                }
            </Showcase>
            <Button className='btn-redirect' onClick={() => handleClick()}>Lançamento</Button>
            <Button className='btn-employee' onClick={() => setEmployee(true)}>Adicionar Funcionario</Button>
        </Content>
        </>
    )
}

export default AdminList