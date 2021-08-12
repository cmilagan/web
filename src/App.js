import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar sticky="top" />
      <Switch>
        <Route path ='/web' exact component= {Home} />
        <Route path ='/resume' exact component={Resume} />
        <Route path ='/about' exact component={About} />
        <Route path ='/projects' exact component={Projects} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
