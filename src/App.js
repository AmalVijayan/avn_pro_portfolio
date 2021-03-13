import './App.css';
// import Header from './components/Header/Header'
// import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
