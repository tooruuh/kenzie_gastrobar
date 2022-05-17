import {
  Container,
  Header,
  Title,
  Content,
  DescriptionContainer,
  ButtonContainer,
  ImgContainer,
  Image,
} from "./styles";

import Button from "../../components/Button";
import { useHistory } from "react-router";
import waiter from "../../assets/waiter.svg";
import { motion } from "framer-motion"

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
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
              className="description">
              Olá, somos um grupo de desenvolvedores front-end que resolveu
              invovar na área de restaurante.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
              className="description">
              Quer esperimentar um pouquinho da nossa ferramenta ?
            </motion.p>
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
            <Image src={waiter} alt="logotipo Kenzie Gastrobar" />
          </ImgContainer>
        </Content>
      </Container>
    </>
  );
}

export default CapturePage;
