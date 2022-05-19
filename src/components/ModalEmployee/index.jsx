import { ContainerProduct, Modal, ButtonModal } from "./style";

import { useContext, useState } from "react";
import { ModalContext } from "../../Providers/modal";
import { AdminContext } from "../../Providers/admin";
import Button from "../Button";
import { toast } from "react-toastify";

function ModalEmployee() {
  const [name, setName] = useState("");

  const { setEmployee } = useContext(ModalContext);

  const { registerEmployee } = useContext(AdminContext);

  function handleName(name) {
    if (name.length <= 2) {
      toast.error("Adicione um nome com mais de 2 letras");
    } else {
      registerEmployee(name);
    }
  }

  return (
    <ContainerProduct>
      <Modal>
        <section>
          <h3>ADICIONAR NOVO FUNCIONÁRIO</h3>
          <ButtonModal onClick={() => setEmployee(false)}>X</ButtonModal>
        </section>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          min="2"
          placeholder="Nome"
        />
        <Button className="btn-register" onClick={() => handleName(name)}>
          Cadastrar
        </Button>
      </Modal>
    </ContainerProduct>
  );
}

export default ModalEmployee;

// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
// config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
// data: {name: 'Carlos', userId: '2', totalSales: 0, id: 8}
// headers: {content-length: '69', content-type: 'application/json; charset=utf-8', location: 'http://kenzie-gastrobar.herokuapp.com/employees/8'}
// request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status: 201
// statusText: "Created"
