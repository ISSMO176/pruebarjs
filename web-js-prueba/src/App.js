import './App.css';

import Home from './Screens/Home';
import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import HowWeWorks from './Screens/HowWeWork';
import Services from './Screens/Services';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Benefits/>
      <Contact/>
      <HowWeWorks/>
      <Services/>
    </div>
  );
}

export default App;
