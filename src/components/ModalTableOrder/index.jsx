import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useModal } from "../../Providers/modal";
import { TablesContext } from "../../Providers/tables";
import {
  BtBack,
  BtFinish,
  Footer,
  Headerr,
  Hr,
  ModalContainer,
  ModalContent,
  ResumTotal,
  Vitrine,
} from "./style";

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
    return acc + currentValue.price;
  }, 0);

  function onCheckout() {
    removeTable(tableOrderId);
    toast.success("Mesa finalizada.");
    setTableOrder(false);
    syncTables();
  }

  return (
    <ModalContainer>
      <ModalContent>
        <Headerr>
          <h2>CONSUMO MESA {tableOrderId}</h2>
          <button onClick={() => setTableOrder(false)}>X</button>
        </Headerr>

        <Vitrine>
          {tableRequest.products.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item.name}</li>
                <li>R$ {item.price.toFixed(2).replace('.',',')}</li>
              </ul>
            );
          })}
        </Vitrine>

        <Footer>
          <Hr />

          <BtBack onClick={() => setTableOrder(false)}>
            Voltar para lista de mesas
          </BtBack>

          <ResumTotal>
            <p>Total R$ {subtotal.toFixed(2)}</p>
            <BtFinish onClick={onCheckout}>Finalizar mesa</BtFinish>
          </ResumTotal>
        </Footer>
      </ModalContent>
    </ModalContainer>
  );
}
