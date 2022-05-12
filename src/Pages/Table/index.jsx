import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import ModalTableOrder from "../../components/ModalTableOrder";
import { useModal } from "../../Providers/modal";
import { TablesContext } from "../../Providers/tables";
import { CardTable, Container, VitrineTable } from "./styles";

function TablePage() {
  const { tableOrder, setTableOrder, setTableOrderId } = useModal();
  const { tables, syncTables } = useContext(TablesContext);
  useEffect(() => {
    syncTables();
  }, []);
  console.log(tables);

  function showModal(id) {
    setTableOrderId(id);
  }

  return (
    <>
      <Header></Header>

      <Container>
        <h1>Lista de mesas</h1>

        <VitrineTable>
          {tables.map((item) => {
            return (
              <CardTable
                key={item.id}
                id={item.id}
                onClick={(e) => {
                  setTableOrder(true);
                  showModal(e.target.id);
                }}
              >
                Mesa {item.numberTable}
              </CardTable>
            );
          })}
        </VitrineTable>
      </Container>

      {tableOrder && <ModalTableOrder />}
    </>
  );
}

export default TablePage;
