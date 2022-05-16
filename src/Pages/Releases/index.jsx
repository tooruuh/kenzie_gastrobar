import Button from '../../components/Button';
import {HeaderContainer, Title, AdminName, InfoContainer, SectionContainer, Content, Container, ButtonContainer, UserContainer, GeneralContainer} from './styles';
import { FaUserAlt } from "react-icons/fa";
import {BsCart4} from 'react-icons/bs'
import { useHistory} from 'react-router'
import { useContext} from 'react'
import Product from '../../components/ProductReleases'
import { ReleaseContext } from "../../Providers/releases"
import { useEffect } from 'react';

function ReleasesPage (){

  const token = localStorage.getItem('@token')

  const name = localStorage.getItem('@userName')

  const { handleClick, filterProducts, listProducts, productsRealeases  } = useContext(ReleaseContext)

  const history = useHistory()

  const handleNavigation = (path) => {
      return history.push(path)
  }

  useEffect(() => {
    listProducts()
  },[])

  return (
    <>
      <Container>
        <HeaderContainer>

            <InfoContainer>
                <Title>Kenzie Gastrobar</Title>
                <UserContainer>
                    <AdminName>{name}</AdminName>
                    <FaUserAlt className="icon-user"/>
                </UserContainer>
            </InfoContainer>
            <BsCart4 className='icon-cart'/>

        </HeaderContainer>
        <GeneralContainer>
            <SectionContainer>
                <Button onClick={() => handleClick("Bedidas")}>Bebidas</Button>
                <Button onClick={() => handleClick("Comidas")}>Comidas</Button>
                <Button onClick={() => handleClick("Drinks")}>Drinks</Button>
                <Button onClick={() => handleClick("Sobremesas")}>Sobremesas</Button>
            </SectionContainer>

            <Content>

            { productsRealeases.length === 0 ? (
                
                productsRealeases.map((response, index) => {
                    return <Product key={index} info={response}/>
                })
            
            ):(
                filterProducts.map((response, index) => {
                    return <Product key={index} info={response}/>
                })
            )

            }
            </Content>

            <ButtonContainer>
                <Button className='button-table' onClick={() => handleNavigation('/table')}>Lista de mesas</Button>
                {
                  token && <Button className='button-home' onClick={() => handleNavigation('/admin')}>Home</Button>
                }

            </ButtonContainer>

        </GeneralContainer>
      </Container>
    </>
  );
}

export default ReleasesPage;
