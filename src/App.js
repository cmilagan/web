import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Post from './components/pages/Post';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <>
    <Router>
      <Navbar sticky="top" />
      <Switch>
        <Route path ='/web' exact component= {Home} />
        <Route path ='/web/blog' exact component= {Blog} />
        <Route path ='/web/resume' exact component={Resume} />
        <Route path ='/web/about' exact component={About} />
        <Route path ='/web/projects' exact component={Projects} />
        <Route path ='/web/post/:id' render={props => <Post {...props} />} />
        <Route path ='/web/404' exact component={NotFound} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
