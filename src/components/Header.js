import { NavLink } from 'react-router-dom';

import planet from './planet.png';

const Header = () => (
  <>
    <nav>
      <div className="planet"><img src={planet} alt="planet" width="50px" /></div>
      <h1>Space Travelers&lsquo;s Hub </h1>
      <div className="links">
        <div className="link cal_link rockets">
          <NavLink
            to="/rockets"
            activeStyle={{
              fontWeight: 'bold',
              color: 'green',
              textDecoration: 'underline',
            }}
          >
            Rockets
          </NavLink>
        </div>
        <div className="link cal_link missions">
          <NavLink
            to="/missions"
            activeStyle={{
              fontWeight: 'bold',
              color: 'green',
              textDecoration: 'underline',
            }}
          >
            Missions
          </NavLink>
        </div>
        <div className="link home_link profile">
          <NavLink
            to="/myprofile"
            activeStyle={{
              fontWeight: 'bold',
              color: 'green',
              textDecoration: 'underline',
            }}
          >
            My profile
          </NavLink>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
