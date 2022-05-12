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
  GeneralContainer,
} from "./styles";
import { FaUserAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useHistory } from "react-router";
import Logout from "../../components/Logout";

function ReleasesPage() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <section className="section-title-releases">
            <Title>Kenzie Gastrobar</Title>

            <section>
              <FaUserAlt className="icon-user" />
              <AdminName>Wellington</AdminName>
            </section>
          </section>
          <section className="logout-cart-releases">
            <BsCart4 className="icon-cart" />

            <Logout />
          </section>
        </HeaderContainer>
        <GeneralContainer>
          <SectionContainer>
            <Button>Bebidas</Button>
            <Button>Comidas</Button>
            <Button>Drinks</Button>
            <Button>Sobremesas</Button>
          </SectionContainer>

          <Content>
            <CardProduct></CardProduct>
          </Content>

          <ButtonContainer>
            <Button onClick={() => handleNavigation("/table")}>
              Lista de mesas
            </Button>
          </ButtonContainer>
        </GeneralContainer>
      </Container>
    </>
  );
}

export default ReleasesPage;
