import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 13px;
    text-align: center;

    div::-webkit-scrollbar {
        display: none;
        
    }

    .btn {
        height: 25px;
        width: 136px;
        border-radius: 5px;
        border: none;
        background-color: var(--orange-light);
        color: var(--white);
        font-family: Arimo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        
        @media (min-width: 768px) {
            height: 33px;
            width: 187px;
            font-size: 16px;
        }
    }

    .h1-table {
        text-align: center;
        margin-bottom: 13px;
        font-family: 'Arimo';
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
    }

    @media (min-width: 768px) {
        .h1-table {
            font-size: 24px;
        }
    }

    @media(min-width: 1024px){
        margin-top: 20px;
        
        .h1-table {
            font-size: 30px;
            margin-bottom: 20px;
        }
    }

    .showcase{

    .btn-card {
        width: 79px;
        height: 61px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin: 6px;
        border-radius: 8px;
        color: var(--white);
        background-color: var(--orange-dark);
        border: none;

        font-family: 'Arimo';
        font-size: 15px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;

        :hover {
            opacity: 0.6;
        }


        @media(min-width: 768px){
            width: 132px;
            height: 80px;
            font-size: 1.5rem;  
        }



        @media(min-width: 1440px){
            width: 146px;
            height: 85px;
        }
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

    .btn-card {
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
        border: none;

        font-family: 'Arimo';
        font-size: 15px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;

        :hover {
            opacity: 0.6;
        }


        @media(min-width: 800px){
            width: 133px;
            height: 80px;
            font-size: 1.5rem;  
        }
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