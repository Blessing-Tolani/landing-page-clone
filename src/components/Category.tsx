import {
  StyledSection,
  StyledDiv,
  StyledTitle,
  StyledP,
  StyledLink,
} from './styles/Category.styled';

export default function Category() {
  return (
    <StyledSection>
      <h1>Featured topics by category</h1>
      <StyledDiv>
        <div>
          <h3>Development</h3>
          <div>
            <StyledTitle>Python</StyledTitle>
            <StyledP>36,354,994 students</StyledP>
          </div>
          <div>
            <StyledTitle>Web Development</StyledTitle>
            <StyledP>11,415,615 students</StyledP>
          </div>
          <div>
            <StyledTitle>Machine Learning</StyledTitle>
            <StyledP>17,070,015 students</StyledP>
          </div>
        </div>
        <div>
          <h3>Business</h3>
          <div>
            <StyledTitle>Financial Analysis</StyledTitle>
            <StyledP>1,195,282 students</StyledP>
          </div>
          <div>
            <StyledTitle>SQL</StyledTitle>
            <StyledP>5,977,561 students</StyledP>
          </div>
          <div>
            <StyledTitle>PMP</StyledTitle>
            <StyledP>1,733,398 students</StyledP>
          </div>
        </div>
        <div>
          <h3>IT and Software</h3>
          <div>
            <StyledTitle>AWS Certification</StyledTitle>
            <StyledP>6,078,244 students</StyledP>
          </div>
          <div>
            <StyledTitle>Ethical Hacking</StyledTitle>
            <StyledP>10,931,066 students</StyledP>
          </div>
          <div>
            <StyledTitle>Cyber Security</StyledTitle>
            <StyledP>3,998,037 students</StyledP>
          </div>
        </div>
        <div>
          <h3>Design</h3>
          <div>
            <StyledTitle>Photoshop</StyledTitle>
            <StyledP>10,909,736 students</StyledP>
          </div>
          <div>
            <StyledTitle>Graphic Design</StyledTitle>
            <StyledP>3,381,052 students</StyledP>
          </div>
          <div>
            <StyledTitle>Drawing</StyledTitle>
            <StyledP>2,410,849 students</StyledP>
          </div>
        </div>
      </StyledDiv>
      <StyledLink>Explore more topics</StyledLink>
    </StyledSection>
  );
}
