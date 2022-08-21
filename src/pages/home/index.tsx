import styles from "./home.module.css";
import { BagdeItem } from "../../components/BagdeItem";
import { Header } from "../../components/Header";

import { ReactComponent as CardIconBackgroundBrown } from "../../assets/cardIconBackgroundBrown.svg";
import CoffeeCop from "../../assets/coffeeCop.png";
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <Header />

        <section className={styles.brandContentSection}>
          <div className={styles.content}>
          <div className={styles.infoContainer}>
            <h1>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>

            <div className={styles.badgeInformationContainer}>
              <div>
                <BagdeItem
                  title="Compra simples e segura"
                  icon={CardIconBackgroundBrown}
                />
                <BagdeItem
                  title="Entrega rápida e rastreada"
                  icon={CardIconBackgroundBrown}
                />
              </div>
              <div>
                <BagdeItem
                  title="Embalagem mantém o café intacto"
                  icon={CardIconBackgroundBrown}
                />
                <BagdeItem
                  title="O café chega fresquinho até você"
                  icon={CardIconBackgroundBrown}
                />
              </div>
            </div>
          </div>

          <div className={styles.imgContent}>
            <img src={CoffeeCop} alt="Coffee brand" />
          </div>
          </div>
        </section>

        <section className={styles.coffesContainerSection}>
          <h1>Nossos cafés</h1>

          <div className={styles.coffreeGridContainer}>
            
              <div>
                <CoffeeCard />
              </div>
              <div>
                <CoffeeCard />
              </div>
              <div>
                <CoffeeCard />
              </div>
              <div>
                <CoffeeCard />
              </div>

              <div>
                <CoffeeCard />
              </div>
              <div>
                <CoffeeCard />
              </div>
              <div>
                <CoffeeCard />
              </div>
              <div>
                <CoffeeCard />
              </div>
          </div>

        </section>

      </div>
    </div>
  );
}
