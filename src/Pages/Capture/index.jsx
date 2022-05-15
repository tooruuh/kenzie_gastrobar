import {
  Container,
  Header,
  Title,
  Content,
  DescriptionContainer,
  Description,
  ButtonContainer,
  ImgContainer,
  Image,
} from "./styles";

import Button from "../../components/Button";
import { useHistory } from "react-router";
import waiter from "../../assets/waiter.svg";

function CapturePage() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <Container>
        <Header>
          <Title>Kenzie Gastrobar</Title>
        </Header>
        <Content>
          <DescriptionContainer>
            <Description>
              Olá, somos um grupo de desenvolvedores front-end que resolveu
              invovar na área de restaurante.
            </Description>
            <Description>
              Quer esperimentar um pouquinho da nossa ferramenta ?
            </Description>
            <ButtonContainer>
              <Button
                className="btn-capture"
                onClick={() => handleNavigation("/register")}
              >
                Experimente grátis
              </Button>
            </ButtonContainer>
          </DescriptionContainer>
          <ImgContainer>
            <Image src={waiter} alt="adicionar item" />
          </ImgContainer>
        </Content>
      </Container>
    </>
  );
}

export default CapturePage;
