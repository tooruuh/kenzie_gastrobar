import styled from "styled-components";

export const ContainerLogout = styled.button`
  background-color: var(--orange-dark);
  border: none;
  position: absolute;
  right: 0px;
  top: 55px;
  display: flex;
  width: 30px;
  font-family: "Arimo";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #ffffff;
  margin-right: 7px;
  cursor: pointer;
  color: var(--orange-light);
  :hover {
    color: rgb(255,0,0);
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    left: 20px;
    font-size: 16px;
    right: 0px;
  }
`;
