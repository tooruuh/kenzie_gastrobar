
import Header from "../../components/Header"
import AdminList from "../../components/AdminList"
import ModalProduct from "../../components/ModalProduct"
import ModalEmployee from "../../components/ModalEmployee"
import { useContext} from "react"
import { ModalContext} from "../../Providers/modal"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ModalId from "../../components/ModalId"


function AdminPage () {
    const token = localStorage.getItem('@token')

    const {employee, product, modalId} = useContext(ModalContext)

    const history = useHistory()

    if (!token) {
        history.push('/register')
    }


    return (
        <>
        <Header/>
        <main>
            <AdminList/>
            {
                product === false ? '' : <ModalProduct/>
            }
                        {
                employee === false ? '' : <ModalEmployee/>
            }
            {
                modalId === false ? '' : <ModalId/>
            }
        </main>
        </>
    )
}

export default AdminPage