import styles from './coffeeCard.module.css';

import Coffee from '../../assets/Coffee.png';
import ChartWhite from '../../assets/chartWhite.png';
import { ButtonChooseCoffee } from '../Buttons/ButtonChooseCoffee';
import { ButtonDeleteCoffee } from '../Buttons/ButtonDeleteCoffee';

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
          <ButtonChooseCoffee />
          <ButtonDeleteCoffee Icon={ChartWhite} />
        </div>
      </div>
    </div>
  )
}