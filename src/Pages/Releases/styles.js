import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--orange-dark);
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon-user {
    color: var(--white);
    margin-left: -50px;
    margin-top: 8px;
    margin-right: 10px;
  }

  .icon-cart {
    color: var(--white);
    margin-right: 30px;
    font-size: 35px;
  }

  .section-title-releases {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }

  .logout-cart-releases {
    display: flex;
  }

  @media (min-width: 1024px) {
    .section-title-releases {
      flex-direction: row;
      justify-content: space-between;
      width: 400px;
      padding-left: 40px;
    }

    .logout-cart-releases {
      width: 300px;
      justify-content: space-between;
      padding-right: 40px;
    }
  }
`;

export const AdminName = styled.p`
  display: inline-block;
  font-family: "Arimo";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: var(--white);
`;

export const Title = styled.h1`
  display: flex;
  font-family: "Arimo";
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: var(--white);
`;

export const Container = styled.div`
  background: var(--brown-light);
  height: 100vh;
`;

export const Content = styled.div`
  background-color: rgb(231, 148, 109, 0.6);
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 11px 8px;
  align-items: center;
  width: 290px;
  height: 383px;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 450px;
    height: 415px;
  }

  @media (min-width: 1440px) {
    width: 650px;
    height: 500px;
  }
`;

export const SectionContainer = styled.div`
  padding: 1px 1px 1px 1px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: var(--brown-light);
  margin: auto;
  width: 285px;
  margin-top: 15px;

  button {
    font-family: "Archivo";
    font-style: normal;
    color: var(--black);
    background: transparent;
    height: 25px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    width: 445px;

    button {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    width: 640px;

    button {
      width: 120px;
      font-size: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
  width: 290px;

  button {
    width: 125px;
    height: 35px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--brown-light);
    background: var(--orange-light);
    border: none;
    font-family: "Arimo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--brown-light);
  }

  @media (min-width: 768px) {
    width: 450px;
  }

  @media (min-width: 1440px) {
    width: 650px;
  }
`;

export const CardProduct = styled.div``;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
