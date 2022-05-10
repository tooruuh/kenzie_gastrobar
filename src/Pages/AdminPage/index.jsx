import { Header, Title } from "./styles"

import {FaUserAlt} from 'react-icons/fa'
import AdminList from "../../components/AdminList"


function AdminPage () {

    return (
        <>
        <Header>
            <Title>Kenzie Gastrobar</Title>
            <FaUserAlt className="icon-user"/>
            <p className="p-admin-name">name</p>
        </Header>
        <main>
            <AdminList/>
        </main>
        </>
    )
}

export default AdminPage