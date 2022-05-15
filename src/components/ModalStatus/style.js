import styled from 'styled-components'

export const ContainerModal = styled.div`
    z-index: 1;
    position: fixed;
    background-color: rgb(0,0,0,0.50);
    width: 100vw;
    height: 100vh;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
        background-color: var(--brown);
        width: 280px;
        height: 260px;
        border-radius: 6px;
        position: fixed;
        padding-bottom: 15px;
    }

    .header-modal {
        background-color: var(--orange-dark);
        border-radius: 6px 6px 0px 0px;
        height: 50px;
        padding-left: 10px;
        padding-top: 10px;

        font-family: Source Sans Pro;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;

        color: #fff;
        position: relative;
    }

    .button-exit {
        position: absolute;
        top: 11px;
        left: 250px;
        background-color: var(--orange-dark);

        font-family: Source Sans Pro;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;

        border: none;
        color: var(--brown);
        :hover {
            color: var(--red);
        }
    }

    .showcase {
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        overflow: auto;
        height: 200px;
    }

    .employee {
        width: 270px;
        height: 40px;
        align-items: center;
        display: flex;
        margin-top: 10px;
        background-color: var(--orange-dark);
        justify-content: space-between;

        border-radius: 8px;
    }

    p {
        margin-left: 10px;
        width: 150px;
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;

        font-family: Arimo;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

        color: #fff;
    }

    .delete-employee {
        margin-right: 10px;
        background-color: var(--orange-dark);

        font-family: Arimo;
        font-size: 14px;
        font-weight: bold;
        line-height: 18px;

        border: none;
        color: var(--brown);
        :hover {
            color: var(--red);
        }
    }

    @media (min-width: 768px) {
        .modal {
            width: 450px;
        }

        .header-modal {
            padding-left: 20px
        }

        .button-exit {
            left: 420px;
        }

        .showcase {
            flex-wrap: wrap;
            overflow: visible;
            overflow-y: auto;
            justify-content: flex-start;
        }

        .employee {
            height: 100px;
            width: 200px;
            flex-wrap: wrap;
            margin-left: 10px;
        }

        .delete-employee {
            margin-left: 10px;
        }
    }


`