import styles from './buttonChooseCoffee.module.css';

interface IButtonChooseCoffee {
    background?: string; 
    width?: number; 
    height?: number;
}

export function ButtonChooseCoffee({ background, width, height }: IButtonChooseCoffee): JSX.Element {

    const style = {
        width: width,
        height: height,
        "background-color": background,
    }

    return (
        <div style={style} className={styles.buttonContainer}>
            <button aria-label='Minus Coffee'>−</button>
            <span aria-label='coffee quantity'>1</span>
            <button aria-label='Plus Coffee'>+</button>
        </div>
    )
}