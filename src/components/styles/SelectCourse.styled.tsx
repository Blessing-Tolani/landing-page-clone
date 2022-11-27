import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: 20px 0px;
  padding: 0 70px;
  & > h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.3rem;
    margin-bottom: 0px;
  }
`;

export const StyledP = styled.p`
  font-size: 20px;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: var(--nav-default-color);
  border: none;
  background-color: transparent;
  margin-right: 30px;
  padding: 0px;
  &:hover {
    color: var(--black);
  }
`;

export const StyledDiv = styled.div`
  border: 1px solid #d1d7dc;
  padding: 4px 0px 0px 27px;
  margin-top: 10px;
  & > h2 {
    margin-bottom: 0px;
  }
  & > p {
    color: var(--black);
    width: 66%;
    line-height: 1.5rem;
  }
`;

export const StyledLink = styled.a`
  background-color: white;
  color: var(--black);
  font-weight: 800;
  width: 8rem;
  height: 2.5rem;
  font-size: 14px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
`;
