import { useContext, useEffect } from "react";
import { useModal } from "../../Providers/modal";
import { TablesContext } from "../../Providers/tables";
import {
  Footer,
  Headerr,
  Hr,
  ModalContainer,
  ModalContent,
  ResumTotal,
  Showcase,
} from "./style";
import Button from "../Button";


export default function ModalTableOrder() {
  

  const { tableOrderId, setTableOrder } = useModal();
  const { tables, syncTables, removeTable } = useContext(TablesContext);

  useEffect(() => {
    syncTables();
    
  }, []);

  const tableRequest = tables.find((item) => {
    return +item.id === +tableOrderId;
  });

  const subtotal = tableRequest.products.reduce((acc, currentValue) => {
    return Number(acc) + Number(currentValue.price) * Number(currentValue.quantity);
  }, 0);

  function onCheckout() {
    removeTable(tableOrderId);

    setTableOrder(false);
    syncTables();
  }


  return (
    <ModalContainer>
      <ModalContent>
        <Headerr>
          <h2>CONSUMO MESA {tableRequest.numberTable}</h2>
          <button onClick={() => setTableOrder(false)}>X</button>
        </Headerr>

        <Showcase>
          {tableRequest.products.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item.name}</li>
                <li>R$ {Number(item.price).toFixed(2).replace(".", ",")}</li>
                <li>Quantidade: {item.quantity}</li>
              </ul>
            );
          })}
        </Showcase>

        <Footer>
          <Hr />

          <Button className="btn-back" onClick={() => setTableOrder(false)}>
            Voltar para lista de mesas
          </Button>

          <ResumTotal>
            <p>Total R$ {subtotal.toFixed(2)}</p>
            <Button className="btn-finish" onClick={onCheckout}>
              Finalizar mesa
            </Button>
          </ResumTotal>
        </Footer>
      </ModalContent>
    </ModalContainer>
  );
}
