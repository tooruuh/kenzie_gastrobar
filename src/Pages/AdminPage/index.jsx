import { Main } from "./style"

import Header from "../../components/Header"
import AdminList from "../../components/AdminList"
import ModalProduct from "../../components/ModalProduct"
import ModalEmployee from "../../components/ModalEmployee"
import ModalId from "../../components/ModalId"
import ModalStatus from "../../components/ModalStatus"
import { useContext} from "react"
import { ModalContext} from "../../Providers/modal"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



function AdminPage () {
    
    const token = localStorage.getItem('@token')

    const { employee, product, modalId } = useContext(ModalContext)

    const history = useHistory()

    if (!token) {
        history.push('/register')
    }

    return (
        <>
        <Header verify={'admin'}/>
        <Main>
            <AdminList/>
            {
                product && <ModalProduct/>
            }
            {
                employee && <ModalEmployee/>
            }
            {
                modalId && <ModalId/>
            }
        </Main>
        </>// vendas
    )
}

export default AdminPage