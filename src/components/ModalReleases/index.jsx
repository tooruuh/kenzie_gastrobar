import { useState } from "react";
import { useModal } from "../../Providers/modal";
import Button from "../Button";
import { Container, ModalContainer } from "./style";

function ModalReleases() {
  const { setModalReleases } = useModal();
  const { mesa, setMesa } = useState("");

  function handleChange(event) {
    return setMesa(event.target.value);
  }

  // function handleSend() {
  //   console.log(mesa);
  // }

  return (
    <>
      <Container>
        <ModalContainer>
          <h3 className="h1-title-cart">CARRINHO DE PRODUTOS</h3>
          <span className="exit" onClick={() => setModalReleases(false)}>
            X
          </span>

          <ul className="list-cart-products">
            {/* aqui vem array de produtos selecionados*/}
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
