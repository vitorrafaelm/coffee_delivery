import { ButtonChooseCoffee } from "../Buttons/ButtonChooseCoffee";
import { ButtonDeleteCoffee } from "../Buttons/ButtonDeleteCoffee";
import styles from "./cardCoffeeCheckout.module.css";

import TrashIcon from "../../assets/trash-regular.svg";
import Coffee from "../../assets/Coffee.png";
import TrashPurple from '../../assets/trash-purple.svg';

export function CardCoffeeCheckout(): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.card__group}>
            <img src={Coffee} alt="" className={styles.coffeeIcon} />
            <div className={styles.card_section}>
            <h3>Expresso tradicional</h3>
            <div className={styles.buttonContainer}>
                <ButtonChooseCoffee width={72} height={32} background='#E6E5E5' />
                <ButtonDeleteCoffee Icon={TrashPurple} width={91} height={32} background='#E6E5E5' title="REMOVER" />
            </div>
            </div>
        </div>
        
        <div className={styles.priceContainer}>
            <span>R$ 9,90</span>
        </div>
       
      </div>

      
    </div>
  );
}
