import { useModal } from "../../Providers/modal";
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

//Array usado para simular a API, deve ser trocado ainda para a api

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

export default function ModalTableOrder() {
  const { tableOrderId, setTableOrder } = useModal();

  const tableRequest = mesas.find((item) => {
    return +item.id === +tableOrderId;
  }).pedidos;

  const subtotal = tableRequest.reduce((acc, currentValue) => {
    return acc + currentValue.price
  }, 0)

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
          {tableRequest.map((item, index) => {
            return (
              <li key={index}>
                <h2>{item.nome}</h2>
                <h3>{item.price}</h3>
              </li>
            );
          })}
        </Vitrine>

        <Footer>
          <Hr />

          <BtBack onClick={() => setTableOrder(false)}>Voltar para lista de mesas</BtBack>

          <ResumTotal>
            <p>Total R$ {subtotal}</p>
            <BtFinish>Finalizar mesa</BtFinish>
          </ResumTotal>
        </Footer>

      </ModalContent>
    </ModalContainer>
  );
}
