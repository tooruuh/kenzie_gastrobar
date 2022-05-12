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
          <h1>CONSUMO MESA {tableOrderId}</h1>
          <span>
            <strong onClick={() => setTableOrder(false)}>X</strong>
          </span>
        </Headerr>

        <Vitrine>
          {tableRequest.products.map((item, index) => {
            return (
              <li key={index}>
                <h2>{item.name}</h2>
                <h3>{item.price.toFixed(2)}</h3>
              </li>
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
