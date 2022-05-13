import styled from 'styled-components'

export const Item = styled.article`
    height: 56px;
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-left: 25px;
    background-color: var(--orange-dark);
    border-radius: 10px;

    .icon-product {
        color: var(--white);
        margin-right: 20px;
        font-size: 20px;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        margin-right: 5px;
        margin-left: 5px;
        height: 90px;
    }
`

export const Name = styled.p`
    font-family: 'Arimo';
    overflow: hidden;
    text-overflow: ellipsis;
    width: 155px;
    height: 18px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: var(--white);

    @media (min-width: 768px) {
        width: 180px;
    }
`

export const Price = styled.p`
    font-family: 'Arimo';
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--white);
    
    @media (min-width: 768px) {
        margin-top: 5px;
    }
`

export const Li = styled.li`
    list-style-type: none;
`

