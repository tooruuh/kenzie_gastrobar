import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";
import ModalTableOrder from "../../components/ModalTableOrder";
import { useModal } from "../../Providers/modal";
import { TablesContext } from "../../Providers/tables";
import { Container } from "./styles";
import waiter from '../../assets/waiter-light.svg'
import Button from "../../components/Button";
import ContainerProducts from "../../components/ContaineProducts";

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
        <img className="image" src={waiter} alt="logotipo Kenzie Gastrobar" />
        <h1 className="h1-table">Lista de mesas</h1>

        <ContainerProducts className='showcase'>
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
        </ContainerProducts>

        <Button className='btn' onClick={() => history.push('/releases')}>Lançamentos</Button>
      </Container>

      {tableOrder && <ModalTableOrder />}
    </>
  );
}

export default TablePage;
