import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  & > div {
    margin-left: 100px;
    & > h1 {
      font-family: 'Times New Roman', Times, serif;
      font-size: 2.3rem;
      margin-bottom: 0px;
    }
    & > p {
      width: 100%;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

export const StyledLink = styled.a`
  background-color: var(--black);
  color: white;
  font-weight: 800;
  width: 10rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  cursor: pointer;
`;
