import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Email from './components/Email';
import Phone from './components/Phone';
import Program from './components/Program';
import Times from './components/Times';
import Location from './components/Location'
import Confirmation from './components/Confirmation'

function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/times/:day"
          render={ props => <Times {...props} /> }
        />
        <Route path="/program">
          <Program />
        </Route>
        <Route path="/phone">
          <Phone />
        </Route>
        <Route path="/email">
          <Email />
        </Route>
        <Route path="/name">
          <Name />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
