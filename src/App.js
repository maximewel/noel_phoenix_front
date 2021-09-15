import './App.css';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ApiDisplay from './components/ApiDisplay';
import Account from './components/account/Account';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import Navbar from './components/partials/Navbar';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route path="/account" component={Account} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={Home} />
        </Switch>
      <ApiDisplay />
    </>
  );
}

export default App;