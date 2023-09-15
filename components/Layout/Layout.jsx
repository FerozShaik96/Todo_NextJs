import React from 'react';
import Navbar from '../NavBar/NavBar';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
