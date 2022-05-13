import styled from "styled-components";

export const Container = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: var(--brown-light);
  background: var(--orange-light);
  border: none;
  cursor: pointer;

  font-family: "Inika";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  &:hover {
    opacity: 0.6;
  }
`;
