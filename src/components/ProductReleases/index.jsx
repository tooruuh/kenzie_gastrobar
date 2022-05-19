import { Item, Name, Price, Li, Ul } from "./styles";

function Product({ info, onClick }) {
  return (
    <Item onClick={onClick}>
      <Ul>
        <Li>
          <Name>{info.name}</Name>
        </Li>
        <Li>
          <Price>R$ {info.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
        </Li>
      </Ul>
    </Item>
  );
}

export default Product;
