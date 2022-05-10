import { ContentHeader, Title } from "./styles";

import {FaUserAlt} from 'react-icons/fa';

function Header () {
    return (
        <ContentHeader>
            <Title>Kenzie Gastrobar</Title>
            <FaUserAlt className="icon-user"/>
            <p className="p-admin-name">name</p>
        </ContentHeader>
    )
}

export default Header