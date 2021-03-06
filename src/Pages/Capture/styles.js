import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border: none;
  background: var(--orange-dark);
  color: var(--brown-light);
  height: 5rem;
`;

export const Title = styled.h1`
  margin: 20px 5px 5px 5px;
  font-family: "Arimo";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: var(--white);

  @media (min-width: 425px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  flex-wrap: wrap;
  background: var(--orange-dark);
  align-content: space-between;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 1024px) {
    justify-content: center;
  }

  @media (min-width: 1440px) {
    margin-top: 4px;
  }

  @media (min-width: 1600px) {
    align-content: space-around;
    padding: 0px 70px 0px 70px;
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  background: var(--orange-dark);
  height: 100vh;
`;

export const DescriptionContainer = styled.article`
  background: var(--orange-dark);
  display: flex;
  height: 30rem;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    width: 40%;
  }

  @media (min-width: 1600px) {
    width: 34%;
  }

  .description {
    font-family: "Inika";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 26px;
    color: var(--brown);
    text-align: left;
    margin: 24px;
    width: 272px;

    @media (min-width: 768px) {
      width: 320px;
      font-size: 27px;
      margin: 60px;
      margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
      width: 421px;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px 5px 5px 5px;

  .btn-capture {
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
    :hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 1024px) {
    margin: 90px 5px 5px 5px;
  }
`;

export const ImgContainer = styled.div`
  display: none;
  width: 50%;
  height: 80%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    width: 35%;
  }

  @media (min-width: 1600px) {
    width: 23%;
  }
`;

export const Image = styled.img`
  display: none;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: 250px;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`;
