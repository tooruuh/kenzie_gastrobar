import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(231, 148, 109, 0.6);
  height: 230px;
  width: 285px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 8px;

  .title-form-login {
    display: flex;
    background-color: #bc4124;
    width: 100%;
    height: 44px;
    border-radius: 8px 8px 0px 0px;
    align-items: center;
    justify-content: center;
    font-family: "Arimo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: #ffffff;
  }
  .form-login-company {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
  }

  .section-login-employee {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
  }

  .input-login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin: 0px 0px 11px;
    width: 269px;
    height: 48px;
    border-radius: 8px;
    padding: 12px 16px;
    border: none;
  }

  .input-login::placeholder {
    color: var(--grey);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.8;
  }

  .btn-login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 42px;
    width: 269px;
    background-color: #bc4124;
  }

  @media screen and (min-width: 768px) {
    height: 335px;
    width: 393px;

    .input-login {
      width: 369px;
      height: 48px;
    }

    .form-login-company {
      margin-top: 70px;
    }

    .section-login-employee {
      margin-top: 80px;
    }

    .btn-login {
      margin-top: 30px;
      width: 370px;
    }
  }

  @media screen and (min-width: 1240px) {
    height: 375px;
    width: 435px;
    .form-login-company {
      margin-top: 65px;
    }
    .input-login {
      width: 369px;
      height: 48px;
    }
    .section-login-employee {
      margin-top: 80px;
    }
    .btn-login {
      margin-top: 60px;
    }
  }
`;

export const ChangeForms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 260px;
  margin-top: 20px;
  margin-bottom: 5px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  .change-user-login:hover {
    color: #bc4124;
    cursor: pointer;
  }

  .employee-true {
    color: #bc4124;
  }

  .company-false {
    color: #000000;
  }

  .employee-false {
    color: #000000;
  }

  .company-true {
    color: #bc4124;
  }

  @media screen and (min-width: 768px) {
    width: 380px;
  }

  @media screen and (min-width: 1100px) {
    width: 420px;
  }
`;
