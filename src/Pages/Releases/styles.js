import styled from 'styled-components'


export const Container = styled.div`
    background: var(--brown-light);
    height: 100vh;
`

export const Content = styled.div`
        background-color: rgb(231, 148, 109, 0.6);
        margin: 0 auto;
        border-radius: 8px;
        display: flex;
        padding: 11px 8px;
        width: 290px;
        height: 400px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: scroll;
        align-content: flex-start;

    @media (min-width: 768px) {
        width: 450px;
        height: 415px;
    }

    @media (min-width: 1440px) {
        display: flex;
        grid-template-columns: 125px 125px 125px 125px;
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
        border: none;
    }

    button:focus {
        color: var(--orange-dark);
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
    
    .button-table{
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

    .button-home {
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
      margin-left: 40px;
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


    div::-webkit-scrollbar {
        display: none;
        
    }

`