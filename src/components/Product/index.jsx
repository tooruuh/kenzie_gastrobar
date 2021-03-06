import {Item, Name, Price, Li} from './style'
import {BsFillTrashFill} from 'react-icons/bs'
import { useContext } from 'react'
import { AdminContext } from '../../Providers/admin'

function Product ({info}) {
    const {deleteProduct} = useContext(AdminContext)
    return (
        <Item>
            <ul>
                <Li><Name>{info.name}</Name></Li>
                <Li><Price>{Number(info.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price></Li>
            </ul>
            <BsFillTrashFill onClick={() => deleteProduct(info.id)} className='icon-product'/>
        </Item>
    )
}

export default Product