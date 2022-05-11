import styled from 'styled-components'

export const ContentHeader = styled.header`
    background-color: var(--orange-dark);
    height: 78px;
    .icon-user {
        color: #fff;
        margin-left: 20px;
        font-size: 22px;
        margin-top: 8px;
        display: inline-block;
    }

    .p-admin-name {
        display: inline-block;
        font-family: 'Arimo';
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
        margin-left: 11px;
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
    color: #fff;
    margin-left: 20px;
    padding-top: 16px;
`