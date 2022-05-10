import {Item, Name, Price, Li} from './style'

import {BsFillTrashFill} from 'react-icons/bs'

function Product () {
    return (
        <Item>
            <ul>
                <Li><Name>Pão com queijo</Name></Li>
                <Li><Price>R$ 5</Price></Li>
            </ul>
            {/* <Name>Pão com queijo</Name> */}
            {/* <Price>R$ 5</Price> */}
            <BsFillTrashFill className='icon-product'/>
        </Item>
    )
}

export default Product