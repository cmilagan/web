import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <Router>
      <Navbar sticky="top" />
      <Switch>
        <Route path ='/web' exact component= {Home} />
        <Route path ='/resume' exact component={Resume} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
