import { ContentHeader, Title, AdminName } from "./style";

import { FaUserAlt } from "react-icons/fa";
import Logout from "../Logout";

function Header({ children, verify }) {
  const name = localStorage.getItem("@userName");

  return (
    <ContentHeader>
      <Title>Kenzie Gastrobar</Title>
      <AdminName>{name}</AdminName>
      <div className="user">
      <FaUserAlt className="icon-user" /> 
        {children}
      <Logout />
      </div>
    </ContentHeader>
  );
}

export default Header;
