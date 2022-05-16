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
`;

export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: var(--brown);
  width: 280px;
  height: 520px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 380px;
  }

  @media (min-width: 1100px) {
    width: 480px;
  }

  .exit {
    display: flex;
    position: absolute;
    cursor: pointer;
    color: var(--white);
    left: 90%;
    top: 15px;
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

  .list-cart-products {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    left: 5px;
    width: 96%;
    height: 300px;
    top: 80px;
    border-bottom: 1px solid white;
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
    width: 112px;
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
`;
