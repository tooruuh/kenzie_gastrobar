import { useContext } from "react";
import { AdminContext } from "../../Providers/admin";
import { ContainerLogout } from "./styles";

function Logout() {
  const { handleLogout } = useContext(AdminContext);

  return <ContainerLogout onClick={handleLogout}>SAIR</ContainerLogout>;
}

export default Logout;
