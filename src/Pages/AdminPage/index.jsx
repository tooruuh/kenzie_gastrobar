
import Header from "../../components/Header"
import AdminList from "../../components/AdminList"
import ModalProduct from "../../components/ModalProduct"
import ModalEmployee from "../../components/ModalEmployee"
import { useContext} from "react"
import { ModalContext} from "../../Providers/modal"


function AdminPage () {

    const {employee, product} = useContext(ModalContext)

    return (
        <>
        <Header/>
        <main>
            {
                product === false ? null : <ModalProduct/>
            }
                        {
                employee === false ? null : <ModalEmployee/>
            }
            <AdminList/>
        </main>
        </>
    )
}

export default AdminPage