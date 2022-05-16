import styled, { keyframes } from 'styled-components'

export const Mobile = keyframes`
    from{top: -50px;}
    to{top: 90px}
`

export const Desktop = keyframes`
    from{top: -50px;}
    to{top: 89px}
`

export const ModalHead = styled.section`
    width: 90px;
    height: 90px;
    border-radius: 15px;
    background-color: var(--orange-60);
    text-align: center;
    animation: go-back 1s;
    position: absolute;
    left: 10px;
    top: 90px;
    animation: ${Mobile} 1.5s;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .button {
        height: 27px;
        width: 70px;
        border: none;
        font-family: Source Sans Pro;
        font-size: 12px;
        font-weight: 600;
        line-height: 24px;
        border-radius: 5px;
        background-color: var(--orange-dark);
        color: #fff;
    }

    @media (min-width: 768px) {
        width: 120px;
        left: auto;
        top: 80px;
        right: 10px;
        animation: ${Desktop} 1.5s;
        animation-fill-mode: forwards;
        .button {
            width: 90px;
            height: 27px;
            font-size: 14px;
        }
    }
` 