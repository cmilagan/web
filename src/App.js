import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
    <Router>
      <Navbar sticky="top" />
      <Switch>
        <Route path ='/web' exact component= {Home} />
        <Route path ='/blog' exact component= {Blog} />
        <Route path ='/resume' exact component={Resume} />
        <Route path ='/about' exact component={About} />
        <Route path ='/projects' exact component={Projects} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
