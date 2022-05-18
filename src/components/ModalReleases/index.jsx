import { useContext, useEffect, useState } from "react";
import { useModal } from "../../Providers/modal";
import Button from "../Button";
import { Container, ModalContainer } from "./style";
import { BiTrash } from "react-icons/bi";
import { TablesContext } from "../../Providers/tables";
import { toast } from "react-toastify";

function ModalReleases() {
  const { setModalReleases } = useModal();

  const [mesa, setMesa] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@cart")) || []
  );

  const { createTable } = useContext(TablesContext);

  useEffect(() => {
    orderItens();
  }, []);

  function handleDeleteProd(name, index) {
    const prod = cart.find((element) => element.name === name);
    if (prod.quantity > 1) {
      cart[index].quantity--;
      localStorage.setItem("@cart", JSON.stringify(cart));
      setCart(JSON.parse(localStorage.getItem("@cart")) || []);
    } else {
      const deleteProd = cart.filter((item, ind) => ind !== index);
      localStorage.setItem("@cart", JSON.stringify(deleteProd));

      setCart(deleteProd);
    }
  }

  function orderItens() {
    const quantityAdd = cart.filter((product, index, array) => {
      const quantity = array.filter(
        (element) => element.name === product.name
      ).length;
      if (array.indexOf(product) === index) {
        product.quantity = quantity;
        return product;
      }
    });

    const filteredArray = quantityAdd.filter(
      (ele, ind, array) =>
        ind === array.findIndex((elem) => elem.name === ele.name)
    );
    setCart(filteredArray);
  }

  const totalValue = cart.reduce(
    (a, b) => a + Number(b.price) * Number(b.quantity),
    0
  );

  function addTable() {
    if (mesa) {
      createTable(cart, mesa);
      localStorage.setItem("@cart", JSON.stringify([]));
      setCart(JSON.parse(localStorage.getItem("@cart")) || []);
      setModalReleases(false);
      toast.success("pedido enviado!");
    } else {
      toast.error("adicione uma mesa!");
    }
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

          <article className="list-cart-products">
            {cart.map((products, index) => (
              <section key={index} className="prod-list">
                <ul>
                  <li>
                    <p>{products.name}</p>
                  </li>
                  <li>
                    <p>R$ {products.price}</p>
                  </li>
                  <li>
                    <p>Quantidade: {products.quantity}</p>
                  </li>
                </ul>
                <BiTrash
                  className="delete-product"
                  cursor="pointer"
                  onClick={() => handleDeleteProd(products.name, index)}
                />
              </section>
            ))}
          </article>
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
            maxlength='2'
            onChange={(event) => setMesa(event.target.value)}
          />
          <section className="sub-total-price">
            <span className="sub-total">SUB-TOTAL</span>
            <span className="price">R$ {totalValue}</span>
          </section>
          <Button onClick={() => addTable()} className="send-release">
            ENVIAR PEDIDO
          </Button>
        </ModalContainer>
      </Container>
    </>
  );
}

export default ModalReleases;
