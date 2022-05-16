import {Item, Name, Price, Li, Ul} from './style'

function Product ({info}) {
    return (
        <Item>
            <Ul>
                <Li><Name>{info.name}</Name></Li>
                <Li><Price>R$ {info.price}</Price></Li>
            </Ul>
        </Item>
    )
}

export default Product