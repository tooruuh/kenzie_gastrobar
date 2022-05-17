import { ContentHeader, Title, AdminName } from "./style";

import { FaUserAlt } from "react-icons/fa";
import Logout from "../Logout";
import { useContext } from "react";
import { ModalContext } from "../../Providers/modal";

function Header({ children, verify }) {
  const name = localStorage.getItem("@userName");

  const {setModalDelete} = useContext(ModalContext)

  return (
    <ContentHeader>
      <Title>Kenzie Gastrobar</Title>
      <AdminName>{name}</AdminName>
      <div className="user">
      {
        verify === 'admin' ? <FaUserAlt onClick={() => setModalDelete(true)} className="icon-user" /> : <FaUserAlt className="icon-user" />
      } 
        {children}
        
      </div>
    </ContentHeader>
  );
}

export default Header;
