import { Outlet } from 'react-router-dom';
import Navigation from '../component/Navigation';

export default function Root() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
