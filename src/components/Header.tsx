import {
  StyledHeader,
  StyledSection,
  StyledSecondSection,
  StyledInput,
  StyledSpan,
  StyledLink,
  StyledDiv,
} from './styles/Header.styled';
import { GrCart } from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';

export default function Header() {
  return (
    <StyledHeader>
      <StyledSection>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
          width="91"
          height="34"
        />
        <a href="www">Categories</a>
        <StyledInput type="search" placeholder="Search for anything" />
        <a href="www">Udemy Business</a>
        <a href="www">Teach on Udemy</a>
        <StyledSpan>
          <GrCart />
        </StyledSpan>
      </StyledSection>
      <StyledSecondSection>
        <StyledLink title="white" slot="black">
          Log in
        </StyledLink>
        <StyledLink title="black" slot="white">
          Sign up
        </StyledLink>
        <StyledDiv>
          <TbWorld />
        </StyledDiv>
      </StyledSecondSection>
    </StyledHeader>
  );
}
