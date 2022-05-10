import { ContentHeader, Title, AdminName } from "./style";

import {FaUserAlt} from 'react-icons/fa';

function Header ({children}) {
    return (
        <ContentHeader>
            <Title>Kenzie Gastrobar</Title>
            <AdminName>Wellington</AdminName>
            <FaUserAlt className="icon-user"/>
            {children}
        </ContentHeader>
    )
}

export default Header