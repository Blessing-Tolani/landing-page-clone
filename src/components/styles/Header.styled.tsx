import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
`;

export const StyledSection = styled.section`
  color: var(--black);
  text-decoration-line: none;
  font-size: 14px;
  display: flex;
  width: 82%;
  padding: 3px 0px;
  align-items: center;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  & > a {
    color: var(--black);
    text-decoration-line: none;
    &:hover {
      color: var(--purple);
    }
  }
`;

export const StyledSecondSection = styled(StyledSection)`
  width: 18%;
  justify-content: space-around;
  @media screen and (min-width: 1439px) {
    width: 16%;
  }
`;

export const StyledInput = styled.input`
  border-radius: 25px;
  width: 50%;
  padding: 17px 0px 17px 20px;
  outline: none;
  border: 1px solid var(--black);
  background-color: #f7f9fa;
`;

export const StyledSpan = styled.span`
  font-size: 23px;
`;

export const StyledLink = styled.p`
  background-color: ${(props) => props.title};
  color: ${(props) => props.slot};
  font-weight: 700;
  width: 5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
`;

export const StyledDiv = styled.div`
  background-color: white;
  height: 40px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
  border: 1px solid var(--black);
`;
