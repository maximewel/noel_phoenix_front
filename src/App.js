import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ApiDisplay from './components/ApiDisplay';
import Account from './components/account/Account';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import Navbar from './components/partials/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <ApiDisplay />
    </div>
  );
}

export default App;