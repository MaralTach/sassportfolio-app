import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Contact/>
     <Projects/>

    </div>
  );
}

export default App;
