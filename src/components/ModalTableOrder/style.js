import styled from 'styled-components'

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background: var(--black-opacity);
    color: var(--white); 
    transition: 0.5s;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 280px;
    height: 530px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    background-color: var(--brown);

`

export const Headerr = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;

    h2 {
        font-family: "Source Sans Pro";
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        margin-left: 45px;
        padding-top: 5px;
    }

    button{
        position: absolute;
        left: 240px;
        top: 11px;
        background-color: var(--brown);
        color: var(--white);
        font-size: 18px;
        border: none;
    }
`

export const Showcase = styled.ul`
    list-style: none;
    height: 300px;
    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    ul {
        margin-left: 7px;
        align-items: center;
        background-color: var(--orange-dark);
        height: 56px;
        width: 266px;
        border-radius: 10px;
        margin-bottom: 5px;
        margin-right: 10px;
        border-radius: 8px;

        li {
            padding-top: 7px;
            margin-left: 8px;
            font-family: 'Arimo';
            font-size: 16px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            width: 248px;
            height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;

        }
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;

    .btn-back {
        width: 242px;
        height: 40px;
        border-radius: 8px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
        color: var(--brown-light);
        background: var(--orange-light);
        border: none;
        font-family: 'Inika';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        margin: 16px auto;
        :hover {
            opacity: 0.6;
        }
    }

    div {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        p {
            font-family: 'Arimo';
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 0em;
        }
    }
`

export const ResumTotal = styled.div`
    display: flex;
    align-items: center;

    .btn-finish {
        width: 150px;
        height: 40px;
        border-radius: 8px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
        color: var(--brown-light);
        background: var(--orange-light);
        border: none;
        font-family: 'Inika';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        :hover {
            opacity: 0.6;
        }
    }
`

export const Hr = styled.hr`
    border-color: var(--white);
`


