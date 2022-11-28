import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: 60px 0px;
  padding: 40px 0px 60px 70px;
  background-color: #f7f9fa;
`;

export const StyledTitle = styled.p`
  color: #5624d0;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  margin: 0;
`;

export const StyledP = styled.p`
  color: var(--nav-default-color);
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 14px;
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  & h3 {
    padding-bottom: 10px;
  }
`;

export const StyledLink = styled.a`
  background-color: white;
  color: var(--black);
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
