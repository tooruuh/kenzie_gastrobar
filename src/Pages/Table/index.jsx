import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";
import ModalTableOrder from "../../components/ModalTableOrder";
import { useModal } from "../../Providers/modal";
import { TablesContext } from "../../Providers/tables";
import { Btn, Container, VitrineTable } from "./styles";
import Button from "../../components/Button";

function TablePage() {
  const { tableOrder, setTableOrder, setTableOrderId } = useModal();
  const { tables, syncTables } = useContext(TablesContext);

  const history = useHistory();

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
              <Button
                className="btn-card"
                key={item.id}
                id={item.id}
                onClick={(e) => {
                  setTableOrder(true);
                  showModal(e.target.id);
                }}
              >
                Mesa {item.numberTable}
              </Button>
            );
          })}
        </VitrineTable>

        <Btn onClick={() => history.push("/releases")}>Lançamentos</Btn>
      </Container>

      {tableOrder && <ModalTableOrder />}
    </>
  );
}

export default TablePage;
