import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import SelectCourses from './components/select-courses';
import TeachOnUdemy from './components/TeachOnUdemy';
import UdemyBusiness from './components/UdemyBusiness';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SelectCourses />
      <Category />
      <TeachOnUdemy />
      <Partners />
      <UdemyBusiness />
      <Footer />
    </>
  );
}

export default App;
