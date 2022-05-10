import {ContainerProduct, Modal, ButtonModal, ButtonRegister} from './style'

function ModalEmployee ({setIsOpen}) {
    return (
        <ContainerProduct>
            <Modal>
                <section>
                    <h3>ADICIONAR NOVO FUNCIONÁRIO</h3>
                    <ButtonModal onClick={() => setIsOpen(false)}>X</ButtonModal>
                </section>
                <input type="text" placeholder='Nome' />
                <input type="number" placeholder='Preço'/>
                <select name="" id="">
                    <option>Bedidas</option>
                    <option>Comidas</option>
                    <option>Drinks</option>
                    <option>Sobremesas</option>
                </select>
                <ButtonRegister>Cadastrar</ButtonRegister>
            </Modal>
        </ContainerProduct>
    )
}

export default ModalEmployee