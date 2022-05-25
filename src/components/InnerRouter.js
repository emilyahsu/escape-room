import {
    BrowserRouter as Router,
    Route,
    Switch, useRouteMatch
  } from 'react-router-dom';
  import '../App.css';
  import Countdown from 'react-countdown';
  import Decipher from './Decipher';
  import Grammar from './Grammar';

  
  function InnerRouter() {

    let { path, url } = useRouteMatch();

    return (<div>
      <div className='countdown'>
        <p>Time Remaining</p>
        <Countdown date={Date.now() + 2.7e+6} />
      </div>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path={path}>
              <Decipher />
            </Route>
            <Route path={`${path}/grammar`}>
              <Grammar />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  
    );
  }
  
  export default InnerRouter;
  