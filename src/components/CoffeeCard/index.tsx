import styles from './coffeeCard.module.css';

import Coffee from '../../assets/Coffee.png';
import ChartWhite from '../../assets/chartWhite.png';

export function CoffeeCard(): JSX.Element {
  return (
    <div className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <img src={Coffee} alt="" />
        <span>Tradicional</span>
      </header>

      <div className={styles.cardBody}>
        <h3>Expresso tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.price}>
          <span>R$</span>
          <p>9,90</p>
        </div>

        <div className={styles.actionsContainer}>
          <div className={styles.addCoffeeContainer}>
            <button>−</button>
            <span>1</span>
            <button>+</button>
          </div>

          <button className={styles.chartButton}>
            <img src={ChartWhite} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}