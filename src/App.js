import './App.css';
import Home from './pages';
import Blog from './pages/blog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} />
        </Switch>
    
      </Router>
    </div>
  );
}

export default App;
