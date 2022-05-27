import {
    BrowserRouter as Router,
    Route,
    Switch, useRouteMatch
  } from 'react-router-dom';
  import '../App.css';
  import Countdown from 'react-countdown';
  import Decipher from './Decipher';
  import Symbols from './Symbols';
  import {useState} from 'react'
  import { useHistory } from 'react-router-dom';
import End from './End';

  
  const InnerRouter = () =>  {

    let { path, url } = useRouteMatch();
    const history = useHistory()
    const [done, setDone] = useState(false)

    return (<>{ done ? <End />
    : <div>
      <div className='countdown'>
        <p>Time Remaining</p>
        <Countdown date={Date.now() + 2.7e+6} onComplete={() => setDone(true)} />
      </div>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            
            <Route path={`${path}/second`}>
              <Symbols />
            </Route>
            <Route exact path={path}>
              <Decipher />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  
          }</>);
  }
  
  export default InnerRouter;
  