import {
  StyledSection,
  StyledImg,
  StyledDiv,
} from './styles/HeroSection.styled';

export default function HeroSection() {
  return (
    <StyledSection>
      <StyledImg src="/images/herosection-bg.jpg" alt="" />
      <StyledDiv>
        <h1>Cyber Sale ends tonight</h1>
        <p>
          Last chance to bring home the latest skills <br /> with courses as low
          as ₦2,500.
        </p>
      </StyledDiv>
    </StyledSection>
  );
}
