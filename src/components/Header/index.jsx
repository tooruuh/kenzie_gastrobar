import { ContentHeader, Title, AdminName } from "./style";

import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../Providers/modal";
import ModalHeader from "../ModalHeader";
import ModalStatus from "../ModalStatus";

function Header({ children }) {
  
  const name = localStorage.getItem("@userName");

  const { setModalExit, modalExit, modalDelete } = useContext(ModalContext);

  return (
    <ContentHeader>
      <Title>Kenzie Gastrobar</Title>
      <AdminName>{name}</AdminName>
      <div className="user">
        <AiOutlineMenu
          onClick={() => setModalExit(!modalExit)}
          className="icon-user"
        />
        {}
        {children}
      </div>
      {modalExit && <ModalHeader />}
      {modalDelete && <ModalStatus/>}
    </ContentHeader>
  );
}

export default Header;
