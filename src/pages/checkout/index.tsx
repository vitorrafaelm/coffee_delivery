import { Header } from '../../components/Header';
import styles from './checkout.module.css';

import Pin from '../../assets/pin-bold.svg';
import { Input } from '../../components/Input';
import { CardCoffeeCheckout } from '../../components/CardCoffeeCheckout';

export function Checkout(): JSX.Element {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.gridMainContainer}>
                    <section>
                        <h1>Complete o seu pedido</h1>
                        
                        <div className={styles.addressCard}>
                            <div className={styles.header}>
                                <img src={Pin} width={24} />
                                <h3>Endereço de Entrega</h3>
                            </div>
                            <p>Informe o endereço onde deseja receber seu pedido</p>

                            <div className={styles.gridFormContainer}>
                                <div className={styles.item_a}>
                                    <Input placeholder='CEP' name='cep' id='cep' />
                                </div>

                                <div className={styles.item_b}>
                                    <Input placeholder='Rua' name='street' id='street' width100={560} />
                                </div>

                                <div className={styles.item_c}>
                                    <Input placeholder='Numero' name='number' id='number'  />
                                </div>

                                <div className={styles.item_d}>
                                    <Input placeholder='Complemento' name='complement' id='complement' width100={336} />
                                </div>

                                <div className={styles.item_e}>
                                    <Input placeholder='Bairro' name='neightboohood' id='neightboohood' />
                                </div>

                                <div className={styles.item_f}>
                                    <Input placeholder='Cidade' name='city' id='city' width100={264} />
                                </div>

                                <div className={styles.item_g}>
                                    <Input styleContainer={{ display: "flex", justifyContent: "flex-end"}} placeholder='UF' name='cep' id='cep' width100={60} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.payment}>
                        <h1>Cafes selecionados</h1>
                        <div className={styles.cardlocalcontainer}>
                            <CardCoffeeCheckout />
                        </div>
                        
                      
                    </section>
                </div>
            </div>
        </>

    )
}