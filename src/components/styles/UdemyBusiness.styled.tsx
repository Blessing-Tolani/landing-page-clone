import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0px;
  flex-direction: column;
`;

export const StyledBusinessDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  width: 60%;
  & > div {
    margin-right: 50px;
    & > p {
      width: 90%;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.5rem;
    }
  }
`;

export const StyledLink = styled.a`
  background-color: var(--black);
  color: white;
  font-weight: 800;
  width: 10rem;
  height: 2.5rem;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  cursor: pointer;
`;
