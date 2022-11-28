import {
  StyledFooter,
  StyledLink,
  StyledFooterLinkContainer,
  StyledButton,
  StyledSpan,
  StyledDiv,
  StyledCopyRight,
  StyledLogoDiv,
} from './styles/Footer.styled';
import { TbWorld } from 'react-icons/tb';

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <StyledFooterLinkContainer>
          <div>
            <StyledLink>Udemy Business</StyledLink>
            <StyledLink>Teach on Udemy</StyledLink>
            <StyledLink>Get the app</StyledLink>
            <StyledLink>About us</StyledLink>
            <StyledLink>Contact us</StyledLink>
          </div>
          <div>
            <StyledLink>Careers</StyledLink>
            <StyledLink>Blog</StyledLink>
            <StyledLink>Help and Support</StyledLink>
            <StyledLink>Affiliate</StyledLink>
            <StyledLink>Investors</StyledLink>
          </div>
          <div>
            <StyledLink>Terms</StyledLink>
            <StyledLink>Privacy policy</StyledLink>
            <StyledLink>Cookie settings</StyledLink>
            <StyledLink>Sitemap</StyledLink>
            <StyledLink>Accessibility statement</StyledLink>
          </div>
        </StyledFooterLinkContainer>
        <StyledDiv>
          <StyledButton>
            <StyledSpan>
              <TbWorld />
            </StyledSpan>
            <span>English</span>
          </StyledButton>
        </StyledDiv>
      </div>
      <StyledLogoDiv>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="Udemy"
          width="91"
          height="34"
        />
        <StyledCopyRight>© 2022 Udemy, Inc.</StyledCopyRight>
      </StyledLogoDiv>
    </StyledFooter>
  );
}
