import styles from './buttonDeleteCoffee.module.css'; 

interface ButtonDeleteCoffee {
    Icon: string;
    title?: string;
    width?: number; 
    color?: string;
    height?: number;
    background?: string; 
}

export function ButtonDeleteCoffee({ Icon, title, width, color, height, background }: ButtonDeleteCoffee): JSX.Element {

    const style = {
        width: width,
        height: height,
        "background-color": background,
    }

    return (
        <button style={style} className={styles.buttonContainer} aria-label='Delete Coffee'>
            <img src={Icon} alt="Trash Icon" />
            {
                title ? <span aria-label='Delete' className={styles.removeText} >{title}</span> : <></>
            }
        </button>
    )
}