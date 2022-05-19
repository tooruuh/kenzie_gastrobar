import styled from 'styled-components'

export const Container = styled.div`

        background-color: var(--orange-60);
        margin: 0 auto;
        border-radius: 8px;
        display: flex;
        padding: 11px 8px;
        width: 290px;
        height: 400px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: scroll;
        align-content: flex-start;

    @media (min-width: 768px) {
        width: 450px;
        height: 415px;
    }

    @media (min-width: 1440px) {
        display: flex;
        grid-template-columns: 125px 125px 125px 125px;
        width: 650px;
        height: 500px;
    }
`