import { useContext, useState } from "react";
import { useModal } from "../../Providers/modal";
import { ReleaseContext } from "../../Providers/releases";
import Button from "../Button";
import { Container, ModalContainer } from "./style";
import { BiTrash } from "react-icons/bi";
import { TablesContext } from "../../Providers/tables";

function ModalReleases() {
  const { setModalReleases } = useModal();
  const [ mesa, setMesa ] = useState("");

  const {createTable} = useContext(TablesContext)

  const { sendProducts, setSendProducts } = useContext(ReleaseContext);

  const totalValue = sendProducts.reduce((a,b) => a + Number(b.price),0)

  //verificar function delete product do modal cart product
  function handleDeleteProd() {
    const deleteProd = sendProducts.filter((item) => item.id !== item);
    setSendProducts(deleteProd);
  }

  //listar valor sub-total conforme lista atualizada

  //enviar pedido criando uma table

  return (
    <>
      <Container>
        <ModalContainer>
          <h3 className="h1-title-cart">CARRINHO DE PRODUTOS</h3>
          <Button className="exit" onClick={() => setModalReleases(false)}>
            X
          </Button>

          <ul className="list-cart-products">
            {sendProducts.map((products, index) => (
              <li key={index} className="prod-list">
                <p> {products.name}</p>
                <p> R${products.price}</p>
                <BiTrash cursor="pointer" onClick={() => handleDeleteProd} />
              </li>
            ))}
          </ul>
          <Button
            className="back-add-to-cart"
            onClick={() => setModalReleases(false)}
          >
            ADICIONAR MAIS AO CARRINHO
          </Button>
          <input
            className="input-number-table"
            type="text"
            placeholder="N° da mesa"
            onChange={(event) => setMesa(event.target.value)}
          />
          <section className="sub-total-price">
            <span className="sub-total">SUB-TOTAL</span>
            <span className="price">R$ {totalValue}</span>
          </section>
          <Button onClick={() => createTable(sendProducts, mesa)} className="send-release">ENVIAR PEDIDO</Button>
        </ModalContainer>
      </Container>
    </>
  );
}

export default ModalReleases;
