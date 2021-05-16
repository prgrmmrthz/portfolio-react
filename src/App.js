import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container fluid className="p-0">
        <About />
        <hr className="m-0" />
        <Projects />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Certifications />
      </Container>
    </div>
  );
}

export default App;
