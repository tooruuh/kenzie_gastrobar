import styled from 'styled-components'

export const Item = styled.article`
    height: 56px;
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--orange-dark);
    border-radius: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
        height: 90px;
        width: 132px;
    }

    @media (min-width: 1024px) {
        margin-left: 10px;
    }

    @media (min-width: 1440px) {
        margin-left: 21px;
    }
`

export const Name = styled.p`
    text-align: center;
    font-family: 'Arimo';
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    color: #fff;
    

    @media (min-width: 768px) {

    }
`

export const Price = styled.span`
    font-family: 'Arimo';
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;


    @media (min-width: 768px) {
        margin-top: 5px;
    }
`

export const Li = styled.li`
    list-style-type: none;
    margin: 3px;
    display: flex;
    align-items: center;

`
export const Ul = styled.ul`

    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

    @media (min-width: 768px) {
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

    }


`


