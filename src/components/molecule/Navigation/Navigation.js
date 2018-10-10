import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ links }) => (
  <nav>
    <ul>
      {links.map(({ id, link, label }) => (
        <Navigation.Link href={link} key={id}>
          {label}
        </Navigation.Link>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

Navigation.Link = ({ href, children, ...others }) => (
  <li>
    <Link to={href} {...others}>
      {children}
    </Link>
  </li>
);

Navigation.Link.propTypes = {
  href: PropTypes.string.isRequired
};

export default Navigation;
