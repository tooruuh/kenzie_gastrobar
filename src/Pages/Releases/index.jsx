import Button from "../../components/Button";
import {
  HeaderContainer,
  Title,
  AdminName,
  InfoContainer,
  SectionContainer,
  Content,
  Container,
  ButtonContainer,
  CardProduct,
  UserContainer,
  GeneralContainer,
} from "./styles";
import { FaUserAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useHistory } from "react-router";
import { AdminContext } from "../../Providers/admin";
import { useContext } from "react";
import Product from "../../components/Product copy";
import { ReleaseContext } from "../../Providers/releases";
import { useModal } from "../../Providers/modal";
import ModalReleases from "../../components/ModalReleases";

function ReleasesPage() {
  const name = localStorage.getItem("@userName");

  const { modalReleases, setModalReleases } = useModal();

  const { productsRealeases } = useContext(ReleaseContext);

  const { handleClick, filterProducts } = useContext(ReleaseContext);

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <InfoContainer>
            <Title>Kenzie Gastrobar</Title>
            <UserContainer>
              <AdminName>{name}</AdminName>
              <FaUserAlt className="icon-user" />
            </UserContainer>
          </InfoContainer>
          <BsCart4
            cursor="pointer"
            onClick={() => setModalReleases(true)}
            className="icon-cart"
          />
        </HeaderContainer>
        <GeneralContainer>
          <SectionContainer>
            <Button onClick={() => handleClick("Bedidas")}>Bebidas</Button>
            <Button onClick={() => handleClick("Comidas")}>Comidas</Button>
            <Button onClick={() => handleClick("Drinks")}>Drinks</Button>
            <Button onClick={() => handleClick("Sobremesas")}>
              Sobremesas
            </Button>
          </SectionContainer>

          <Content>
            {productsRealeases.length === 0
              ? productsRealeases.map((response, index) => {
                  return <Product key={index} info={response} />;
                })
              : filterProducts.map((response, index) => {
                  return <Product key={index} info={response} />;
                })}
          </Content>

          {modalReleases ? (
            <ModalReleases />
          ) : (
            <ButtonContainer>
              <Button
                className="button"
                onClick={() => handleNavigation("/table")}
              >
                Lista de mesas
              </Button>
            </ButtonContainer>
          )}
        </GeneralContainer>
      </Container>
    </>
  );
}

export default ReleasesPage;
