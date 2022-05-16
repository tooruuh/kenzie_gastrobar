import Button from '../../components/Button';
import {SectionContainer, Content, Container, ButtonContainer, GeneralContainer} from './styles';
import { useHistory} from 'react-router'
import { useContext} from 'react'
import Product from '../../components/ProductReleases'
import { ReleaseContext } from "../../Providers/releases"
import { useEffect } from 'react';
import Header from '../../components/Header';

function ReleasesPage (){

  const token = localStorage.getItem('@token')

  const id = localStorage.getItem('@id')

  const userId = localStorage.getItem("@userId")

  const { handleClick, filterProducts, listProducts, productsRealeases  } = useContext(ReleaseContext)

  const history = useHistory()

  const handleNavigation = (path) => {
      return history.push(path)
  }

  useEffect(() => {
    listProducts(id, userId)
  },[])

  return (
    <>
      <Container>
        <Header/>
        <GeneralContainer>
            <SectionContainer>
                <Button onClick={() => handleClick("Todos")}>Todos</Button>
                <Button onClick={() => handleClick("Comidas")}>Comidas</Button>
                <Button onClick={() => handleClick("Bedidas")}>Bebidas</Button>
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
