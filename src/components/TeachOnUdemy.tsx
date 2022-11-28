import {
  StyledSection,
  StyledDiv,
  StyledLink,
} from './styles/TeachOnUdemy.styled';

export default function TeachOnUdemy() {
  return (
    <StyledSection>
      <StyledDiv>
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          alt=""
        />
        <div>
          <h1>Become an instructor</h1>
          <p>
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <StyledLink>Start teaching today</StyledLink>
        </div>
      </StyledDiv>
    </StyledSection>
  );
}
