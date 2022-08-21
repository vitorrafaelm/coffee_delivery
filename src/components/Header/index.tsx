import Logo from '../../assets/Logo.png'; 
import { ReactComponent as LocationIcon } from '../../assets/pin-purple.svg';
import { ReactComponent as ChartBrown } from '../../assets/chartBrown.svg';
import styles from './header.module.css';

export function Header(): JSX.Element {

  return (
    <nav className={styles.header}>
      <img src={Logo} />
      
      <div className={styles.informationsContainer}>
        <button aria-describedby='button location'>
          <LocationIcon alt="location icon" />
          <label className={styles.labelButton}>Porto Alegre, RS</label>
        </button>

        <button>
          <ChartBrown alt="Chart" />
        </button>
      </div>
    </nav>
  )
}