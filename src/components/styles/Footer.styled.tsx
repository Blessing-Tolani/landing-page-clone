import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 30px 70px;
  background-color: var(--black);
  & > div {
    display: flex;
  }
`;

export const StyledLink = styled.a`
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledFooterLinkContainer = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: var(--black);
  color: white;
  width: 9rem;
  height: 2.5rem;
  font-size: 15px;
  display: flex;
  padding-left: 15px;
  align-items: center;
  border: 1px solid white;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  margin-right: 5px;
  transform: translateY(2px);
`;

export const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;

export const StyledCopyRight = styled.p`
  color: white;
  font-size: 12px;
`;

export const StyledLogoDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
`;
