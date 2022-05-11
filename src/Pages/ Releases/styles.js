import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: var(--orange-dark);
    height: 78px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon-user {
        color: #fff;
        margin-left: -95px;
        font-size: 22px;
        margin-top: 8px;
        display: inline-block;
    }

    .icon-cart{
        color: #fff;
        margin-right: 30px;
        font-size: 25px;
    }
    @media (min-width: 768px){
        .icon-cart{
            margin-right: 50px;

        }
    }

    @media (min-width: 1024px){
        .icon-cart{

            margin-right: 75px;

        }
    }

    @media (min-width: 1440px){
        .icon-cart{

            font-size: 35px;
        }
    }

`

export const AdminName = styled.p`
    display: inline-block;
    font-family: 'Arimo';
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    margin-left: 52px;

    div {
        display: flex;
        align-items: center;
    }
`

export const Title = styled.h1`
    font-family: 'Arimo';
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #fff;
    margin-left: 20px;
    padding-top: 16px;

`

export const InfoContainer = styled.div`

    @media (min-width: 768px){
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;    

        h1{
            font-size: 30px;
            padding: 0px;
            margin: 0px;    
        }

        p{
            font-size: 25px;
            margin: 0px;
            line-height: none;
            height: 10px;

        }

        .icon-user{
            font-size: 26px;

        }

    }

    @media (min-width: 1024px){
        .icon-user{

            margin-left: -165px;
        }

    }

    @media (min-width: 1440px){

        .icon-user{
            margin-left: -150px;
        }

        p{
            margin-left: 435px;
        }

    }

    @media (min-width: 1600px){

        .icon-user{
            margin-left: -190px;
        }
    }



`
export const Container = styled.div`
    background: var(--brown-light);
    height: 100vh;
`

export const Content = styled.div`
        background-color: rgb(231, 148, 109, 0.6);
        margin: 0 auto;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 11px 8px;
        align-items: center;
        width: 290px;
        height: 383px;
        margin-top: 10px;

    @media (min-width: 768px) {
        width: 450px;
        height: 415px;
    }

    @media (min-width: 1440px) {
        width: 650px;
        height: 500px;
    }
`

export const SectionContainer = styled.div`

    padding: 1px 1px 1px 1px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    background: var(--brown-light);
    margin: auto;
    width: 285px;
    margin-top: 15px;

    button{
        font-family: 'Archivo';
        font-style: normal;
        color: var(--black);
        background: transparent;
        height: 25px;
        font-size: 14px;
    }

    @media (min-width: 768px) {

        width: 445px;

        button{
            font-size: 18px;
        }
    }


    @media (min-width: 1440px){

        width: 640px;

        button{
            width: 120px;
            font-size: 20px;
        }
    }


`

export const ButtonContainer = styled.div`
   margin-top: 25px ;
   width: 290px;
    
    button{
  
        width: 125px;
        height: 35px;
        border-radius: 8px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
        color: var(--brown-light);
        background: var(--orange-light);
        border: none;
        font-family: 'Arimo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: var(--brown-light);

    }

    @media (min-width: 768px){
        width: 450px;

    }

    @media (min-width: 1440px){
        
        width: 650px;

    }

  
`

export const CardProduct = styled.div`

`

export const GeneralContainer = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;

`
