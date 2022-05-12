import styled from 'styled-components'

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background: var(--black-opacity);
    color: var(--white); 
    transition: 0.5s;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 330px;
    height: 530px;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--brown);

    @media(max-width: 380px) {
        width: 290px;
    }

    @media(min-width: 800px) {
        width: 600px;
    }

    @media(min-width: 1200px) {
        width: 850px;
    }

    @media(min-width: 1600px) {
        width: 1060px;
        height: 700px;
    }
`

export const Headerr = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 1.4rem;

        @media(min-width: 1600px) {
            font-size: 3rem; 
        }
    }

    span{
        cursor: pointer;
        @media(min-width: 1600px) {
            font-size: 3rem; 
            margin-right: 16px;
        }
    }
`

export const Vitrine = styled.ul`
    list-style: none;
    height: 300px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--orange-dark);
        padding: 0px 16px;
        margin: 5px;
        border-radius: 8px;
        height: 30px;

        h2 {
            font-size: 1.5rem;
            font-weight: 500;
        }

        @media(min-width: 1600px) {
            height: 60px;

            h2, h3 {
                font-size: 2.3rem;
            }
        }
    }

    @media(min-width: 1600px) {
        height: 400px;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        p {
            width: 60px;
            text-align: center;

            @media(min-width: 900px){
                font-size: 2rem;
                width: 170px;
                text-align: center;
            }

            @media(min-width: 1600px){
                font-size: 3rem;
                width: 260px;
                text-align: center;
            }
        }
    }
`

export const ResumTotal = styled.div`
    display: flex;
    align-items: center;
`

export const BtBack = styled.button`
    width: 262px;
    height: 40px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    color: var(--brown-light);
    background: var(--orange-light);
    border: none;
    font-family: 'Inika';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin: 16px auto;

    @media(min-width: 900px){
        width: 532px;
    }

    @media(min-width: 1200px){
        width: 780px;
    }

    @media(min-width: 1600px) {
        height: 60px;
        width: 985px;
        font-size: 2rem;
    }
`

export const BtFinish = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    color: var(--brown-light);
    background: var(--orange-light);
    border: none;
    font-family: 'Inika';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    @media(min-width: 900px){
        width: 282px;
    }

    @media(min-width: 1200px){
        width: 398px;
    }

    @media(min-width: 1600px) {
        width: 510px;
        height: 60px;
        font-size: 2rem;
    }
    
`

export const Hr = styled.hr`
    border-color: var(--white);
`


