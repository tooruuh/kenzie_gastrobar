import { useContext, useState } from "react";
import { useModal } from "../../Providers/modal";
import { ReleaseContext } from "../../Providers/releases";
import Button from "../Button";
import { Container, ModalContainer } from "./style";
import { BiTrash } from "react-icons/bi";

function ModalReleases() {
  const { setModalReleases } = useModal();
  const { mesa, setMesa } = useState("");

  const { sendProducts, setSendProducts } = useContext(ReleaseContext);

  function handleChange(event) {
    return setMesa(event.target.value);
  }

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
          <span className="exit" onClick={() => setModalReleases(false)}>
            X
          </span>

          <ul className="list-cart-products">
            {sendProducts.map((products, index) => (
              <div className="prod-list">
                <li> {products.name}</li>
                <li> R${products.price}</li>
                <BiTrash cursor="pointer" onClick={() => handleDeleteProd} />
              </div>
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
            onChange={() => handleChange}
          />
          <section className="sub-total-price">
            <span className="sub-total">SUB-TOTAL</span>
            <span className="price">R$95,50</span>
          </section>
          <Button className="send-release">ENVIAR PEDIDO</Button>
        </ModalContainer>
      </Container>
    </>
  );
}

export default ModalReleases;
