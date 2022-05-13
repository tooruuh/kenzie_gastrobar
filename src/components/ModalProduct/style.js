import styled from 'styled-components'

export const ContainerProduct = styled.section`
    background-color: rgb(0,0,0,0.50);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.section`
  width: 280px;
  position: relative;
  background-color: #5B1206;
  border-radius: 8px;
  padding-bottom: 15px;

  h3 {
    font-family: Source Sans Pro;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
  }

  input {
    margin: 0px 0px 11px;
    width: 269px;
    height: 48px;
    border-radius: 8px;
    padding: 12px 16px;
    border: none;
    margin-left: 5px;
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

  select {
    margin: 0px 0px 11px;
    width: 269px;
    height: 48px;
    border-radius: 8px;
    padding: 12px 16px;
    border: none;
    margin-left: 5px;
    color: var(--grey);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.8;
  }

  .btn-register {
    height: 40px;
    width: 269px;
    margin-left: 5px;
    border-radius: 8px;
    background-color: var(--orange-darker);
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
    border: none;
    :hover {
      opacity: 0.8;
    }
  }

`

export const ButtonModal = styled.button`
  position: absolute;
  top: 15px;
  left: 250px;
  background-color: var(--brown);
  color: #fff;
  border: none;
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`

export const ButtonRegister = styled.button`
  height: 40px;
  width: 269px;
  margin-left: 5px;
  border-radius: 8px;
  background-color: var(--orange-darker);
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #fff;
  border: none;

`