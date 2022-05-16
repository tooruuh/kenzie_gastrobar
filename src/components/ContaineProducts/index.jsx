import { Container, } from './styles';

const ContainerProducts = ({ children, className }) => (
    <Container className={className}>
      {children}
    </Container>
  );
  
  export default ContainerProducts;