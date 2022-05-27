import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Countdown from 'react-countdown';
import InnerRouter from './components/InnerRouter';
import End from './components/End';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/inner">
            <InnerRouter />
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
