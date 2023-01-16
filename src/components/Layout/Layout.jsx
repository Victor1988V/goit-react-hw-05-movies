import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, Main } from './Layout.styled';

function Layout() {
  return (
    <Wrapper>
      <header>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'movies'}>Movies</NavLink>
          </li>
        </ul>
      </header>

      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Wrapper>
  );
}

export default Layout;
