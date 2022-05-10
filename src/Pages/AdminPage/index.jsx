
import Header from "../../components/Header"
import AdminList from "../../components/AdminList"
import ModalEmployee from "../../components/ModalProduct"
import { useState } from "react"


function AdminPage () {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <Header/>
        <main>
            {
                isOpen === false ? '': <ModalEmployee setIsOpen={setIsOpen}/>
            }
            <AdminList setIsOpen={setIsOpen}/>
        </main>
        </>
    )
}

export default AdminPage