import { ContainerProduct, Modal, ButtonModal } from "./style";

import { useContext } from "react";
import { ModalContext } from "../../Providers/modal";
import { AdminContext } from "../../Providers/admin";

function ModalId() {
  const { setModalId } = useContext(ModalContext);

  const { employeeId } = useContext(AdminContext);

  return (
    <ContainerProduct>
      <Modal>
        <section>
          <ButtonModal onClick={() => setModalId(false)}>X</ButtonModal>
        </section>
        <h3 className="id">FUNCIONARIO CADASTRADO COM SUCESSO !</h3>
        <h3>O ID DO SEU FUNCIONARIO É</h3>
        <h3>{employeeId}</h3>
      </Modal>
    </ContainerProduct>
  );
}

export default ModalId;
