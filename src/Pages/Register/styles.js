import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--orange-60);
  width: 285px;
  margin: 0 auto;
  border-radius: 8px;

  .title-form-register {
    display: flex;
    background-color: var(--orange-black);
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

    color: var(--white);
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 11px 8px;
    align-items: center;
  }
  label {
    width: 269px;
    color: var(--orange-dark);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-left: 10px;
  }
  input {
    margin: 0px 0px 11px;
    width: 269px;
    height: 48px;
    border-radius: 8px;
    padding: 12px 16px;
    border: none;
  }
  input::placeholder {
    color: var(--grey);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.8;
  }
  button {
    width: 269px;
    height: 40px;
    background: var(--orange-darker);
    border: none;
    border-radius: 8px;
    color: var(--brown-light);

    :hover {
      opacity: 0.6;
    }

    /* filter: drop-shadow(0px 8px 10px rgba(50, 173, 198, 0.14))
      drop-shadow(0px 3px 14px rgba(50, 173, 198, 0.12))
      drop-shadow(0px 4px 5px rgba(50, 173, 198, 0.2)); */
  }
  @media (min-width: 768px) {
    width: 433px;

    form {
      margin-top: 7px;
    }

    input {
      width: 357px;
      margin: 0px 0px 18px;
    }

    button,
    label {
      width: 357px;
    }
  }
`;

export const RegisterHeader = styled.header`
  height: 80px;
  background-color: var(--orange-dark);
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Arimo";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    color: var(--white);
  }
`;

export const Redirection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--black);
  }
  
  a {
    text-decoration: none;
    color: var(--orange-dark);
  }
`;
