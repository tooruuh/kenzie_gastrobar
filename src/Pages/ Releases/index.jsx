import Button from '../../components/Button';
import {HeaderContainer, Title, AdminName, InfoContainer, SectionContainer, Content, Container, ButtonContainer, CardProduct} from './styles';
import { FaUserAlt } from "react-icons/fa";
import {BsCart4} from 'react-icons/bs'
import { useHistory} from 'react-router'


function ReleasesPage (){

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    return(<>
        <Container>

        <HeaderContainer>
            <InfoContainer>
            <Title>Kenzie Gastrobar</Title>
            <AdminName>Wellington</AdminName>
            <FaUserAlt className="icon-user"/>
            </InfoContainer>
            <BsCart4 className='icon-cart'/>
        </HeaderContainer>

        <SectionContainer>
            <Button>Bebidas</Button>
            <Button>Comidas</Button>
            <Button>Drinks</Button>
            <Button>Sobremeses</Button>
        </SectionContainer>

        <Content>
            <CardProduct></CardProduct>
        </Content>

        <ButtonContainer>
                    <Button onClick={() => handleNavigation('/table')}>Lista de mesas</Button>
                </ButtonContainer>
        </Container>
    </>
    )
}

export default ReleasesPage