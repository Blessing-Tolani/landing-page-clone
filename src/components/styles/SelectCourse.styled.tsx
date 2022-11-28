import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: 20px 0px;
  padding: 0 50px 0 70px;
  & > h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.3rem;
    margin-bottom: 0px;
  }
`;

export const StyledP = styled.p`
  font-size: 20px;
`;

export const StyledPopularDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  color: var(--nav-default-color);
  border: none;
  background-color: transparent;
  margin-right: 30px;
  padding: 0px;
  &:hover {
    color: var(--black);
  }
  & > span.active {
    color: var(--black);
  }
`;

export const StyledDiv = styled.div`
  border: 1px solid #d1d7dc;
  padding: 4px 0px 30px 27px;
  margin-top: 10px;
  margin-bottom: 60px;
  & > h2 {
    margin-bottom: 0px;
  }
  & > p {
    color: var(--black);
    width: 66%;
    line-height: 1.5rem;
  }
  & > h3 {
    font-weight: 700;
    font-size: 18px;
    margin: 4px 0px;
  }
  & > div {
    display: grid;
    margin-right: 20px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    justify-content: space-between;
  }
`;

export const StyledLink = styled.a`
  background-color: white;
  color: var(--black);
  font-weight: 800;
  width: 8rem;
  height: 2.5rem;
  font-size: 14px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  cursor: pointer;
`;

export const StyledCourseDiv = styled.div`
  & > h3 {
    font-weight: 700;
    font-size: 14px;
    margin-top: 4px;
    color: var(--black);
    width: 90%;
    margin-bottom: 0px;
  }
  & > p {
    font-size: 12px;
    -webkit-line-clamp: 1;
    margin-top: 4px;
    margin-bottom: 0px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: var(--nav-default-color);
  }
  & > img {
    border: 1px solid #d1d7dc;
  }
`;

export const StyledCourseP = styled.p`
  & > span:nth-child(1) {
    color: #b4690e;
    font-size: 14px;
    font-weight: 800;
    padding-top: 2px;
    padding-right: 3px;
  }
  & > span:nth-child(3) {
    color: var(--nav-default-color);
    font-size: 12px;
    padding-left: 3px;
  }
  & > p {
    & > span:nth-child(1) {
      font-size: 14px;
      margin-top: 5px;
      font-weight: 700;
      color: var(--black);
      padding-right: 5px;
    }
    & > span:nth-child(2) {
      font-size: 14px;
      margin-top: 5px;
      font-weight: 500;
      text-decoration-line: line-through;
      color: var(--nav-default-color);
    }
  }
`;

export const StyledImg = styled.img`
  transform: translateY(3px);
`;
