import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;

  @media screen and (min-width: 1439px) {
    padding: 0px 50px;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  top: 15%;
  left: 8%;
  background-color: white;
  padding: 0px 50px 0px 20px;
  & > h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.2rem;
    line-height: 1.7rem;
    margin-bottom: 0px;
  }
  & > p {
    font-size: 20px;
    padding-top: 0px;
    line-height: 1.75rem;
  }
`;

export const StyledImg = styled.img`
  width: 100%;

  @media screen and (min-width: 1439px) {
  }
`;
