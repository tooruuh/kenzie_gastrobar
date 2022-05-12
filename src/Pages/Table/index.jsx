import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";
import ModalTableOrder from "../../components/ModalTableOrder";
import { useModal } from "../../Providers/modal";
import { TablesContext } from "../../Providers/tables";
import { Btn, CardTable, Container, VitrineTable } from "./styles";

function TablePage() {
  const { tableOrder, setTableOrder, setTableOrderId } = useModal();
  const { tables, syncTables } = useContext(TablesContext);
  
  const history = useHistory()

  function showModal(id) {
    setTableOrderId(id);
  }
  
  useEffect(() => {
    syncTables();
  }, []);


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

        <Btn onClick={() => history.push('/ReleasesPage')}>Lançamentos</Btn>
      </Container>

      {tableOrder && <ModalTableOrder />}
    </>
  );
}

export default TablePage;
