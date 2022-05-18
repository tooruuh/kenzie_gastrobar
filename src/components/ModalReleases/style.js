import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: var(--brown);
  width: 280px;
  height: 520px;
  border-radius: 8px;
  
  
  .list-cart-products {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    position: absolute;
    align-items: center;
    margin: 0 auto;
    left: 5px;
    width: 96%;
    height: 300px;
    top: 80px;
    border-bottom: 1px solid white;
    color: white;
    ::-webkit-scrollbar {
      display: none;
    }
    

  }

  .prod-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    width: 92%;
    height: 70px;

    background-color: #bc4124;

    font-family: "Arimo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;

    border-radius: 8px;
    li {
      margin-top: 5px;
    }
  }

  .btn-delete-prod-cart {
    background-color: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    :hover {
      color: var(--orange-darker);
    }
  }

  .exit {
    display: flex;
    position: absolute;
    cursor: pointer;
    color: var(--white);
    left: 90%;
    top: 15px;
    border: none;

    font-family: "Arimo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    background-color: var(--brown);
    :hover {
      color: var(--red);
    }
  }

  .h1-title-cart {
    display: flex;
    position: absolute;

    left: 18%;
    top: 10px;
    color: var(--white);
    width: 195px;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
  }

  .back-add-to-cart {
    height: 40px;

    position: absolute;
    left: 6%;
    right: 46.56%;
    top: 76.47%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    align-items: center;

    color: #ffffff;
    background-color: #e7946d;

    border: none;
    outline: none;
    border-radius: 8px;
  }

  .input-number-table {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 12px 16px;

    position: absolute;
    width: 40%;
    height: 40px;
    left: 56.5%;
    top: 76.47%;

    background: #f4ede6;
    border: none;
    outline: none;
    border-radius: 8px;
  }

  .sub-total-price {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 105px;
    height: 17px;
    left: 7.5%;
    top: 87%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
  }

  .send-release {
    height: 40px;
    position: absolute;
    top: 87%;
    left: 39.38%;
    right: 3%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    align-items: center;

    color: #ffffff;
    background-color: #e7946d;

    border: none;
    outline: none;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
      width: 380px;
  
      .prod-list {
        width: 85% !important;
        height: 80px;
      }
  
      .h1-title-cart {
        width: 300px !important;
        left: 48px;
      }
    }
  
    @media (min-width: 1100px) {
      width: 480px;
  
      .prod-list {
        width: 80% !important;
      }
  
      .list-cart-products {
        width: 100%;
        left: 0px;
      }

      .exit {
        left: 87%;
      }
    }
`;
