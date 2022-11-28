import { StyledDiv } from './styles/TeachOnUdemy.styled';
import {
  StyledSection,
  StyledBusinessDiv,
  StyledLink,
} from './styles/UdemyBusiness.styled';

export default function UdemyBusiness() {
  return (
    <StyledSection>
      <StyledBusinessDiv>
        <div>
          <img
            alt="Udemy Business"
            width="192"
            height="32"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
          />
          <p>
            Get unlimited access to 19,000+ of Udemy’s top courses for your
            team. Learn and improve skills across business, tech, design, and
            more.
          </p>
          <StyledLink>Get Udemy Business</StyledLink>
        </div>
        <img
          alt=""
          width="400"
          height="400"
          src="https://s.udemycdn.com/home/non-student-cta/ub-2x-v3.jpg"
        />
      </StyledBusinessDiv>
      <StyledDiv>
        <img
          alt=""
          width="400"
          height="400"
          src="https://s.udemycdn.com/home/non-student-cta/transform-2x-v3.jpg"
        />
        <div>
          <h1>Transform your life through education</h1>
          <p>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <StyledLink>Find out how</StyledLink>
        </div>
      </StyledDiv>
    </StyledSection>
  );
}
