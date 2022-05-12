import Header from "../../components/Header";
import ModalTableOrder from "../../components/ModalTableOrder";
import { useModal } from "../../Providers/modal";
import { CardTable, Container, VitrineTable } from "./styles";

const mesas = [
  {
    id: 1,
    pedidos: [
      { nome: "pizza", price: 50 },
      { nome: "refri", price: 10 },
    ],
    subtotal: 100,
    isActive: true,
  },
  {
    id: 2,
    pedidos: [
      { nome: "pizza frango", price: 50 },
      { nome: "pizza calabresa", price: 50 },
      { nome: "guarana", price: 10 },
    ],
    subtotal: 100,
    isActive: true,
  },
  {
    id: 3,
    pedidos: [
      { nome: "pizza banana", price: 50 },
      { nome: "pizza portuguesa", price: 50 },
      { nome: "coca-cola", price: 10 },
    ],
    subtotal: 50,
    isActive: true,
  },
  {
    id: 4,
    pedidos: [
      { nome: "Batata, frita", price: 20 },
      { nome: "Hamburguer X", price: 60 },
      { nome: "wisky", price: 25 },
    ],
    subtotal: 50,
    isActive: true,
  },
  {
    id: 5,
    pedidos: [
      { nome: "Bacon em Tiras", price: 35},
      { nome: "Hamburguer X-Salada", price: 40 },
      { nome: "Suco de Limao", price: 20 },
    ],
    subtotal: 50,
    isActive: true,
  },
];

function TablePage() {

  const { tableOrder, setTableOrder, setTableOrderId } = useModal()

  function showModal (id) {
    setTableOrderId(id)
  }

  return (
    <>
      <Header></Header>

      <Container>
        <h1>Lista de mesas</h1>

        <VitrineTable>
          {mesas.map((item) => {
            return <CardTable key={item.id} id={item.id} onClick={(e)=>{
              setTableOrder(true)
              showModal(e.target.id)
            }}>
                Mesa {item.id}
            </CardTable>
          })}
        </VitrineTable>
      </Container>

      {tableOrder && <ModalTableOrder />}
      
    </>
  );
}

export default TablePage;
