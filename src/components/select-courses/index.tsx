import { useState } from 'react';
import {
  StyledSection,
  StyledP,
  StyledButton,
} from '../styles/SelectCourse.styled';
import Courses from './Courses';

export default function SelectCourses() {
  const [activeCourseTab, setCourseTab] = useState('python');

  return (
    <StyledSection>
      <h1>A broad selection of courses</h1>
      <StyledP>
        Choose from 213,000 online video courses with new additions published
        every month
      </StyledP>
      <div>
        <div>
          <StyledButton onClick={() => setCourseTab('python')}>
            Python
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('excel')}>
            Excel
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('web')}>
            Web Development
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('javascript')}>
            Javascript
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('data')}>
            Data Science
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('aws')}>
            AWS Certification
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('drawing')}>
            Drawing
          </StyledButton>
        </div>
        <Courses course={activeCourseTab} />
      </div>
    </StyledSection>
  );
}
