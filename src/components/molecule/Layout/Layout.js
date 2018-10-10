import React from 'react';
import Navigation from '../Navigation';
import navigationData from '../../../data/navigationData';

const Layout = ({ children }) => (
  <div>
    <Navigation links={navigationData} />
    {children}
  </div>
);

export default Layout;
