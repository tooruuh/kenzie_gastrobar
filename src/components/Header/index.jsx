import { ContentHeader, Title, AdminName } from "./style";

import {FaUserAlt} from 'react-icons/fa';

function Header ({children}) {
    return (
        <ContentHeader>
            <Title>Kenzie Gastrobar</Title>
            <FaUserAlt className="icon-user"/>
            <AdminName>name</AdminName>
            {children}
        </ContentHeader>
    )
}

export default Header