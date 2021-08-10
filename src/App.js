import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
      <Navbar sticky="top" />
      <Switch>
        <Route path ='/web' exact component= {Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
