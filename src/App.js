import './App.css';
import Home from './pages';
import Blog from './pages/blog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GetInTouch from './pages/getintouch';
import MobileGetCV from './pages/mobile_email_submit';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} />
          <Route path="/getintouch/me" component={GetInTouch} />
          <Route path="/getcv/mobile" component={MobileGetCV} />

        </Switch>
    
      </Router>
    </div>
  );
}

export default App;
