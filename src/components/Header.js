import { Link } from 'react-router-dom';

import planet from './planet.png';

const Header = () => (
  <>
    <nav style={{ position: 'fixed', top: '0' }}>
      <div className="planet"><img src={planet} alt="planet" width="50px" /></div>
      <h1>Space Travelers&lsquo;s Hub </h1>
      <div className="links">
        <div className="link cal_link rockets">
          <Link to="/rockets">Rockets</Link>
        </div>
        <div className="link cal_link missions">
          <Link to="/missions">Missions</Link>
        </div>
        <div className="link home_link profile">
          <Link to="/myprofile">My profile</Link>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
