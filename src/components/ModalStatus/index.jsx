import { useEffect } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../Providers/admin'
import { ModalContext } from '../../Providers/modal'
import {ContainerModal} from './style'

function ModalStatus () {

    const {setModalDelete} = useContext(ModalContext)

    const {getEmployee, listEmployee, DeleteEmployee} = useContext(AdminContext)

    useEffect(() => {
        getEmployee()
    },[])

    return (
        <ContainerModal>
            <section className="modal">
                <section className="header-modal">
                    <h3>Funcionarios Ativos</h3>
                    <button onClick={() => setModalDelete(false) } className='button-exit'>X</button>
                </section>
                <section className="showcase">

                    {
                        listEmployee.map((employee,index) => {
                            return (
                                <article key={index} className="employee">
                                    <p>{employee.name}</p>
                                    <button onClick={() => DeleteEmployee(employee.id)} className='delete-employee'>Deletar</button>
                                </article>
                            )
                        })
                    }
                    
                </section>
            </section>
        </ContainerModal>
    )
}

export default ModalStatus