import styled from 'styled-components'

export const Content = styled.section`
    text-align: center;

    .btn-redirect {
        background-color: var(--orange-light);
        color: var(--white);
        font-family: 'Source Sans Pro';
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        text-align: center;
        border: none;
        margin-right: 15px;
        height: 40px;
        width: 98px;
        margin-top: 16px;
        border-radius: 5px;
        :hover {
            opacity:0.6;
        }

        @media (min-width: 768px) {
            height: 40px;
            width: 243px;
            margin-right: 61px;
            margin-top: 30px;
        }
    }

    .btn-product {
        background-color: var(--orange-light);
        color: var(--white);
        font-family: 'Source Sans Pro';
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        text-align: center;
        border: none;
        height: 30px;
        width: 141px;
        display: inline-block;
        margin-top: 12px;
        margin-bottom: 5px;
        border-radius: 5px;
        :hover {
            opacity:0.6;
        }

        @media (min-width: 768px) {
            height: 40px;
            width: 243px;
            vertical-align: bottom;
        }
    }

    .btn-employee {
        background-color: var(--orange-light);
        color: var(--white);
        font-family: 'Source Sans Pro';
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        text-align: center;
        border: none;
        height: 40px;
        width: 168px;
        margin-top: 16px;
        border-radius: 5px;
        :hover {
            opacity:0.6;
        }
        
        @media (min-width: 768px) {
            height: 40px;
            width: 243px;
        }
    }
`

export const TitleList = styled.h2`
    font-family: 'Arimo';
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    display: inline-block;
    margin-right: 32px;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 10px;
        margin-right: 127px;
    }
`

export const Showcase = styled.section`
    height: 368px;
    width: 281px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6px;
    background-color: var(--orange-light);

    @media (min-width: 768px) {
        width: 557px;
        height: 362px;
    }
`

export const ButtonProduct = styled.button`
    background-color: var(--orange-light);
    color: var(--white);
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    border: none;
    height: 30px;
    width: 141px;
    display: inline-block;
    margin-top: 12px;
    margin-bottom: 5px;
    border-radius: 5px;

    @media (min-width: 768px) {
        height: 40px;
        width: 243px;
        vertical-align: bottom;
    }
`

export const Button = styled.button`
    background-color: var(--orange-light);
    color: var(--white);
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    border: none;
    margin-right: 15px;
    height: 40px;
    width: 98px;
    margin-top: 16px;
    border-radius: 5px;

    @media (min-width: 768px) {
        height: 40px;
        width: 243px;
        margin-right: 61px;
        margin-top: 30px;
    }
`

export const ButtonEmployee = styled.button`
    background-color: var(--orange-light);
    color: var(--white);
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    border: none;
    height: 40px;
    width: 168px;
    margin-top: 16px;
    border-radius: 5px;

    @media (min-width: 768px) {
        height: 40px;
        width: 243px;
    }
`