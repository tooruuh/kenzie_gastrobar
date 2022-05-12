import { ContentHeader, Title, AdminName } from "./style";

import { FaUserAlt } from "react-icons/fa";

function Header ({children}) {
    const name = localStorage.getItem('@userName')
    
    return (
        <ContentHeader>
            <Title>Kenzie Gastrobar</Title>
            <AdminName>{name}</AdminName>
            <FaUserAlt className="icon-user"/>
            {children}
        </ContentHeader>
    )
}

export default Header;
