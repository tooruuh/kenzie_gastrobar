import {ContainerProduct, Modal, ButtonModal, ButtonRegister} from './style'

import { useContext } from 'react'
import { ModalContext } from '../../Providers/modal'
import { useForm } from "react-hook-form";

function ModalProduct () {

    const {setProduct} = useContext(ModalContext)

    const {
        register,
        handleSubmit,
      } = useForm();

    function onSubmitFunction(data) {
        console.log(data)
    }

    return (
        <ContainerProduct>
            <Modal>
                <section>
                    <h3>ADICIONAR NOVO PRODUTO</h3>
                    <ButtonModal onClick={() => setProduct(false)}>X</ButtonModal>
                </section>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <input {...register("name")} type="text" placeholder='Nome' />
                    <input {...register("price")} type="number" placeholder='Preço'/>
                    <select {...register("section")} name="" id="">
                        <option>Bedidas</option>
                        <option>Comidas</option>
                        <option>Drinks</option>
                        <option>Sobremesas</option>
                    </select>

                    <ButtonRegister
                    type='submit'
                    >Cadastrar</ButtonRegister>
                </form>
            </Modal>
        </ContainerProduct>
    )
}

export default ModalProduct