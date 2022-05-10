import {Item } from './style'

import {BsFillTrashFill} from 'react-icons/bs'

function Product () {
    return (
        <Item>
            <p>Pão</p>
            <p>R$ 5</p>
            <BsFillTrashFill/>
        </Item>
    )
}

export default Product