import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/configureStore';

import Header from './components/Header';
import Missions from './components/Missions';
import RocketsPage from './components/Rockets';
import Myprofile from './components/Myprofile';

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
            <Route exact path="/">
              <RocketsPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
