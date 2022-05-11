import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 12%;

    h1 {
        text-align: center;
        margin-bottom: 7%;
    }

    @media(min-width: 900px){
        margin-top: 6%;

        h1 {
            margin-bottom: 3%;
        }
    }

    @media(min-width: 1500px){
        margin-top: 5%;

        h1 {
            margin-bottom: 3%;
        }
    }

    @media(min-width: 1600px){
        margin-top: 4%;

        h1 {
            margin-bottom: 3%;
        }
    }
`   

export const VitrineTable = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    align-content: flex-start;
    justify-content: space-between;
    max-width: 330px;
    height: 400px;
    margin: auto;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--orange-light);


    @media(min-width: 800px){
        max-width: 600px;
        height: 550px;
        justify-content: flex-start;
    }
    
    @media(min-width: 1200px){
        max-width: 830px;
        height: 550px;
        justify-content: flex-start; 
    }

    @media(min-width: 1600px){
        max-width: 1000px;
        height: 600px;
        justify-content: flex-start;
    }
`

export const CardTable = styled.li`
    width: 60px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 6px;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--orange-dark);
    cursor: pointer;

    @media(min-width: 800px){
        width: 130px;
        height: 80px;
        font-size: 1.5rem;  
    }
    
    @media(min-width: 1200px){
        width: 150px;
        height: 80px;
        font-size: 1.5rem;  
    }
    
    @media(min-width: 1600px){
        width: 150px;
        height: 80px;
        font-size: 1.5rem;  
    }
`

