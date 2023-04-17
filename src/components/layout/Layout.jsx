import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, Main, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
};

export default Layout;
