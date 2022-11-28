import { useState } from 'react';
import {
  StyledSection,
  StyledP,
  StyledButton,
  StyledCourseDiv,
  StyledCourseP,
  StyledImg,
  StyledPopularDiv,
} from '../styles/SelectCourse.styled';
import { popularCourse } from './course';
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
            <span
              className={`${activeCourseTab === 'python' ? 'active' : ''} `}
            >
              Python
            </span>
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('excel')}>
            <span className={`${activeCourseTab === 'excel' ? 'active' : ''} `}>
              Excel
            </span>
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('web')}>
            <span className={`${activeCourseTab === 'web' ? 'active' : ''} `}>
              Web Development
            </span>
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('javascript')}>
            <span
              className={`${activeCourseTab === 'javascript' ? 'active' : ''} `}
            >
              Javascript
            </span>
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('data')}>
            <span className={`${activeCourseTab === 'data' ? 'active' : ''} `}>
              Data Science
            </span>
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('aws')}>
            <span className={`${activeCourseTab === 'aws' ? 'active' : ''} `}>
              AWS Certification
            </span>
          </StyledButton>
          <StyledButton onClick={() => setCourseTab('drawing')}>
            <span
              className={`${activeCourseTab === 'drawing' ? 'active' : ''} `}
            >
              Drawing
            </span>
          </StyledButton>
        </div>
        <Courses course={activeCourseTab} />
      </div>
      <div>
        <h2>Students are viewing</h2>
        <StyledPopularDiv>
          {popularCourse?.courseList.map((course, index) => (
            <StyledCourseDiv>
              <img src={course.backgroundImage} alt="Course logo" />
              <h3>{course.title}</h3>
              <p>{course.tutor}</p>
              <StyledCourseP>
                <span>{course.rating}</span>
                <span>
                  <StyledImg src="/images/Star.png" alt="" />
                  <StyledImg src="/images/Star.png" alt="" />
                  <StyledImg src="/images/Star.png" alt="" />
                  <StyledImg src="/images/Star.png" alt="" />
                  <StyledImg src="/images/half-color-star.png" alt="" />
                </span>
                <span>({course.number})</span>
                <p>
                  <span>₦{course.newPrice}</span>
                  <span>₦{course.formerPrice}</span>
                </p>
                {course.bestSeller && <p className="best-seller">Bestseller</p>}
              </StyledCourseP>
            </StyledCourseDiv>
          ))}
        </StyledPopularDiv>
      </div>
    </StyledSection>
  );
}
