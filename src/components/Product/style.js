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
        color: #fff;
        margin-right: 20px;
        font-size: 20px;
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
    color: #fff;
`

export const Price = styled.p`
    font-family: 'Arimo';
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
`

export const Li = styled.li`
    list-style-type: none;

`

