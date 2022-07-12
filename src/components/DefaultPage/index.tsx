import styles from './DefaultPage.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
            The pasta house
        </div>
      </header>
      <div className={themeStyles.container}>
        <Outlet />
      </div>
    </>
  );
}