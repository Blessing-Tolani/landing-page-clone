import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 10px 0px 20px 70px;
  background-color: #f7f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
    margin-bottom: 0px;
  }
  & > p {
    font-family: Arial, Helvetica, sans-serif;
  }

  & > div {
    display: flex;
    margin-right: 70px;
    margin-top: 10px;
    justify-content: space-between;
    width: 90%;
  }
`;
