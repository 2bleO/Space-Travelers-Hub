import { useEffect, React } from 'react';
// import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    getMissions();
    // dispatch(getBooks());
  }, [/* dispatch */]);

  return (
    <>
      <div>
        <h1>Test</h1>
      </div>
    </>
  );
};

export default Missions;
