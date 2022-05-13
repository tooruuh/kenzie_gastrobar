import styled from 'styled-components'

export const ContentHeader = styled.header`
    background-color: var(--orange-dark);
    height: 78px;
    
    .icon-user {
        color: var(--white);
        position: absolute;
        left: 20px;
        font-size: 22px;
        margin-top: 8px;
        display: inline-block;
    }

    @media (min-width: 768px) {
        display: flex;

        .icon-user {
            position: relative;
            font-size: 35px;
            margin-top: 15px;
            margin-left: 20px;
            margin-right: 70px;
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
    margin-top: 15px;
    color: var(--white);
    margin-left: 52px;

    @media (min-width: 768px) {
        font-family: 'Source Sans Pro';
        font-size: 32px;
        line-height: 40px;
        margin-top: 15px;
        margin-left: auto;
    }

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
    color: var(--white);
    margin-left: 20px;
    padding-top: 16px;

    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 37px;
        text-align: left;
    }
`