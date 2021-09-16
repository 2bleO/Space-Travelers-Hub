/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/configureStore';

import Header from './components/Header';
import MissionsPage from './components/Missions';
import RocketsPage from './components/Rockets';
import MyprofilePage from './components/Myprofile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/myprofile">
              <Myprofile />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route exact path="/rockets">
              <Rockets />
            </Route>
            <Route exact path="/">
              <Rockets />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Rockets() {
  return <RocketsPage />;
}

function Missions() {
  return <MissionsPage />;
}

function Myprofile() {
  return <MyprofilePage />;
}

export default App;
