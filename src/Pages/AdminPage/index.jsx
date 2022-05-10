
import Header from "../../components/Header"
import AdminList from "../../components/AdminList"
import ModalProduct from "../../components/ModalProduct"
import ModalEmployee from "../../components/ModalEmployee"
import { useState } from "react"


function AdminPage () {
    const [isOpen, setIsOpen] = useState(false)

    const [modal, setModal] = useState(false)
    return (
        <>
        <Header/>
        <main>
            {
                isOpen === false ? null : <ModalProduct setIsOpen={setIsOpen}/>
            }
                        {
                modal === false ? null : <ModalEmployee setIsOpen={setModal}/>
            }
            <AdminList setIsOpen={setIsOpen} setModal={setModal}/>
        </main>
        </>
    )
}

export default AdminPage