import { ContentHeader, Title } from "./style";

import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <ContentHeader>
      <Title>Kenzie Gastrobar</Title>
      <div>
        <FaUserAlt className="icon-user" />
        <p className="p-admin-name">name</p>
      </div>
    </ContentHeader>
  );
}

export default Header;
