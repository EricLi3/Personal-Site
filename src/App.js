import logo from './logo.svg';
import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import LandingPage from './components/landing/LandingPage';
function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;
