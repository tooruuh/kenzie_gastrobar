
import Header from "../../components/Header"
import AdminList from "../../components/AdminList"
import ModalProduct from "../../components/ModalProduct"
import ModalEmployee from "../../components/ModalEmployee"
import { useContext} from "react"
import { ModalContext} from "../../Providers/modal"
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function AdminPage () {
    const token = localStorage.getItem('@token')
    const {employee, product} = useContext(ModalContext)

    const history = useHistory()

    if (!token) {
        history.push('/register')
        toast.error('Cadastre-se para poder acessar')
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
        </main>
        </>
    )
}

export default AdminPage