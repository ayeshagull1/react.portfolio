
import './App.css';
import Header from './components/Header';
import  Navbar from './components/navbar'; 
import About from './components/about';
import Education from './components/education';
import ExperienceSection from './components/experience';
import Projects from './components/projects';
import Services from './components/service';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Footer from './components/Footer';
import Skills from './components/skills';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <ExperienceSection></ExperienceSection>
      <Projects></Projects>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      

    </div>
  )
}

export default App;
