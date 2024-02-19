import { useParams, Outlet } from 'react-router-dom';

import styles from './Main.module.sass';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import Maintenance from './Maintenance/Maintenance';
import { useAppSelector } from '../../redux/app/hooks';
import { selectTheme } from '../../redux/themeSlice';

/**
 * An extra component, which controls access to the CV
 * @constructor
 */
export function AboutOrNot() {
  const params = useParams();
  if (params.please === import.meta.env.VITE_APP_PLEASE) {
    return <About />;
  }
  if (import.meta.env.VITE_APP_MAINTENANCE_MODE === 'false') {
    return (<NotFound />);
  }
  return (<Maintenance />);
}

/**
 * A wrapper for components rendered in <main>
 * @constructor
 */
function Main() {
  const theme = useAppSelector(selectTheme);

  return (
    <main
      className={styles.main}
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <Outlet />
    </main>
  );
}

export default Main;
