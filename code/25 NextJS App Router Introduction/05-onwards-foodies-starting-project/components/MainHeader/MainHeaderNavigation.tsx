'use client';
import NavLink from './NavLink';
import classes from './MainHeaderNavigation.module.css';

export default function MainHeaderNavigation() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}
