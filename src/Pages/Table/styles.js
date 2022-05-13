import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 13px;

    h1 {
        text-align: center;
        margin-bottom: 13px;
        font-family: 'Arimo';
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 24px;
        }
    }

    @media(min-width: 900px){
        margin-top: 20px;
        
        h1 {
            font-size: 28px;
            margin-bottom: 20px;
        }
    }
`   

export const VitrineTable = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    align-content: flex-start;
    justify-content: flex-start;
    max-width: 283px;
    height: 400px;
    overflow: auto;
    margin: auto;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--orange-light);

    @media(max-width: 360px){
        max-width: 283px;
        height: 430px;
        justify-content: flex-start;
    }

    @media(min-width: 800px){
        max-width: 600px;
        height: 550px;
        justify-content: flex-start;
    }
`

export const CardTable = styled.li`
    width: 75px;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 6px;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--orange-dark);
    cursor: pointer;

    font-family: 'Arimo';
    font-size: 15px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;


    @media(min-width: 800px){
        width: 133px;
        height: 80px;
        font-size: 1.5rem;  
    }
`

export const Btn = styled.button`
    width: 242px;
    height: 40px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    color: var(--brown-light);
    background: var(--orange-light);
    border: none;
    font-family: 'Arimo';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    margin-left: 34.3%;
    margin-top: 1%;
`