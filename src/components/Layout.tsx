import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/forms">Forms</NavLink>
          <NavLink to="/about-us">AboutUs</NavLink>
        </header>

        <main>
          <Outlet />
        </main>

        <footer>@2022</footer>
      </>
    );
  }
}

export { Layout };
