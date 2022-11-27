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
        <h1>
          Cyber Sale on now: <br /> Courses from ₦2,500
        </h1>
        <p>
          Take the first step toward a brighter future. <br /> Sale ends
          tomorrow.
        </p>
      </StyledDiv>
    </StyledSection>
  );
}
