import styles from './input.module.css';

interface IInputProps {
    placeholder?: string;
    name: string; 
    id: string;
    width100?: number;
    styleContainer?: any;
}

export function Input({ placeholder, name, id, width100, styleContainer }: IInputProps): JSX.Element {
    return (
        <div className={styles.container} style={styleContainer}>
            <input 
                style={{ width: width100 }}
                className={styles.inputMain} 
                placeholder={placeholder} 
                name={name}
                id={id}
            />
        </div>
        
    )
}