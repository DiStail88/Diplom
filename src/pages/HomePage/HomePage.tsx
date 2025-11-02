import Home from '../../components/Home/Home';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default HomePage;
