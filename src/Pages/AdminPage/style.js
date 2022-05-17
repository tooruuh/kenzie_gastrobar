import styled from 'styled-components'


export const Main = styled.div`
    background-color: var(--brown-light);
    .image {
        display: none;
    }

    @media (min-width: 1024px) {
        .image {
            height: 450px;
            display: block;
            position: absolute;
            top: 150px;
        }
    }
`