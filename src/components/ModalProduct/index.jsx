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
    const schema = yup.object().shape({
        name: yup.string().required('Digite um nome'),
        price: yup.string().required('Coloque um preço')
    })

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
                    <label>
                        {!!errors.name?.message && <p> {errors.name.message}</p>}
                    </label>
                    <input {...register("price")} type="number" placeholder='Preço'/>
                    <label>
                        {!!errors.price?.message && <p> {errors.price.message}</p>}
                    </label>
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