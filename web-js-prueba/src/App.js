import logo from './logo.svg';
import './App.css';

import Home from './Screens/Home';
import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import HowWeWorks from './Screens/HowWeWork';
import Services from './Screens/Services';


function App() {
  return (
    <div className="App">
      <Home/>
      <Benefits/>
      <Contact/>
      <HowWeWorks/>
      <Services/>
    </div>
  );
}

export default App;
