import {ContainerProduct, Modal, ButtonModal, ButtonRegister} from './style'

import { useContext } from 'react'
import { ModalContext } from '../../Providers/modal'

function ModalEmployee () {
    const {setEmployee} = useContext(ModalContext)
    return (
        <ContainerProduct>
        <Modal>
            <section>
                <h3>ADICIONAR NOVO FUNCIONÁRIO</h3>
                <ButtonModal onClick={() => setEmployee(false)}>X</ButtonModal>
            </section>
            <input type="text" placeholder='Nome' />
            <ButtonRegister>Cadastrar</ButtonRegister>
        </Modal>
    </ContainerProduct>
    )
}

export default ModalEmployee