import {ContainerProduct, Modal, ButtonModal} from './style'

import { useContext } from 'react'
import { ModalContext } from '../../Providers/modal'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AdminContext } from '../../Providers/admin';
import Button from '../Button'

function ModalProduct () {

    const {setProduct} = useContext(ModalContext)

    const {addProduct} = useContext(AdminContext)
    const schema = yup.object().shape({})
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    function onSubmitFunction(data) {
        addProduct(data)
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
                    <input pattern="[0-9]+([,\.][0-9]+)?" min="0" step="any" name="null" {...register("price")} type="number" placeholder='Preço'/>
                    <select {...register("section")}>
                        <option value='Bedidas'>Bedidas</option>
                        <option value='Comidas'>Comidas</option>
                        <option value='Sobremesas'>Sobremesas</option>
                    </select>

                    <Button
                    className={'btn-register'}
                    type='submit'
                    >Cadastrar</Button>
                </form>
            </Modal>
        </ContainerProduct>
    )
}

export default ModalProduct