import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import MissionsPage from './Missions';

import RocketsPage from './Rockets';

import MyprofilePage from './Myprofile';

const Header = () => (
  <Router>
    <div>
      <nav style={{ backgroundColor: 'orange', position: 'fixed', top: '0' }}>
        <h1>Book Store</h1>
        <div className="links">
          <div className="link home_link">
            <Link to="/myprofile">My profile</Link>
          </div>
          <div className="link cal_link">
            <Link to="/rockets">Rockets</Link>
          </div>
          <div className="link cal_link">
            <Link to="/missions">Missions</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/myprofile">
          <Myprofile />
        </Route>
        <Route path="/">
          <Rockets />
        </Route>
        <Route path="/">
          <Missions />
        </Route>
      </Switch>
    </div>
  </Router>
);

function Rockets() {
  return <RocketsPage />;
}

function Myprofile() {
  return <MyprofilePage />;
}

function Missions() {
  return <MissionsPage />;
}

export default Header;
