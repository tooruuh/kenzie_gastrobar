import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(231, 148, 109, 0.6);
  height: 230px;
  width: 285px;
  display: flex;
  justify-content: center;
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
`;

export const ChangeForms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 260px;
  margin-top: 20px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  .change-user-login:hover {
    color: #bc4124;
  }
`;
