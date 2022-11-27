import { StyledDiv, StyledLink } from '../styles/SelectCourse.styled';

const pythonCourse = {
  title: 'Expand your career opportunities with Python',
  description:
    'Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...',
  more: 'Explore Python',
  courseList: [
    {
      backgroundImage:
        'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
      title: 'Learn Python: The Complete Python Programming Course',
      tutor: 'Avinash Jain, The Codex',
      newPrice: 3200,
      formerPrice: 14900,
      rating: 4.3,
      number: 3968,
      Bestseller: false,
    },
    {
      backgroundImage:
        'https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg',
      title: 'Learning Python for Data Analysis and Visualization',
      tutor: 'Jose Portilla',
      newPrice: 3900,
      formerPrice: 29900,
      rating: 4.3,
      number: 18472,
      Bestseller: true,
    },
    {
      backgroundImage:
        'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
      title: 'Python for Beginners - Learn Programming from scratch',
      tutor: 'Edwin Diaz, Coding Faculty Solutions',
      newPrice: 3200,
      formerPrice: 14900,
      rating: 4.3,
      number: 2239,
      Bestseller: false,
    },
    {
      backgroundImage:
        'https://img-c.udemycdn.com/course/240x135/482754_7146_6.jpg',
      title: 'Python From Scratch & Selenium WebDriver QA Automation 2022',
      tutor: 'Admas Kinfu',
      newPrice: 2500,
      formerPrice: 19900,
      rating: 4.5,
      number: 2197,
      Bestseller: true,
    },
    {
      backgroundImage:
        'https://img-c.udemycdn.com/course/240x135/519554_da68_6.jpg',
      title: 'Teach Your Kids to Code: Learn to Program Python at Any Age!',
      tutor: 'Bryson Payne',
      newPrice: 3200,
      formerPrice: 6500,
      rating: 4.5,
      number: 9021,
      Bestseller: true,
    },
  ],
};

export default function Courses(props: { course: string }) {
  let course;
  switch (props.course) {
    case 'python':
      course = pythonCourse;
      break;
  }
  return (
    <StyledDiv>
      <h2>{course?.title}</h2>
      <p>{course?.description}</p>
      <StyledLink>{course?.more}</StyledLink>
      <div>
        
      </div>
    </StyledDiv>
  );
}
