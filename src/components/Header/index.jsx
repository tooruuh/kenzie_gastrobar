import { ContentHeader, Title } from "./styles";

import {FaUserAlt} from 'react-icons/fa';

function Header ({children}) {
    return (
        <ContentHeader>
            <Title>Kenzie Gastrobar</Title>
            <FaUserAlt className="icon-user"/>
            <p className="p-admin-name">name</p>
            {children}
        </ContentHeader>
    )
}

export default Header