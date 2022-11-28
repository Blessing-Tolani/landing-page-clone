import {
  StyledDiv,
  StyledLink,
  StyledCourseDiv,
  StyledCourseP,
  StyledImg,
} from '../styles/SelectCourse.styled';
import {
  awsCourse,
  dataScience,
  drawingCourse,
  excelCourse,
  javascriptCourse,
  pythonCourse,
  webCourse,
} from './course';

export default function Courses(props: { course: string }) {
  let course;
  switch (props.course) {
    case 'python':
      course = pythonCourse;
      break;
    case 'excel':
      course = excelCourse;
      break;
    case 'web':
      course = webCourse;
      break;
    case 'javascript':
      course = javascriptCourse;
      break;
    case 'data':
      course = dataScience;
      break;
    case 'aws':
      course = awsCourse;
      break;
    case 'drawing':
      course = drawingCourse;
      break;
  }
  return (
    <StyledDiv>
      <h2>{course?.title}</h2>
      <p>{course?.description}</p>
      <StyledLink>{course?.more}</StyledLink>
      <div>
        {course?.courseList.map((course, index) => (
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
      </div>
    </StyledDiv>
  );
}
