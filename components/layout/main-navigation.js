import Link from 'next/link';

import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/pages'>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/pages/auth'>Login</Link>
          </li>
          <li>
            <Link href='/pages/profile'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
