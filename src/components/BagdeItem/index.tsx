import styles from './bagde.module.css'; 

interface BagdeItemProps {
  icon: any; 
  title: string; 
  subInformation?: string; 
}

export function BagdeItem({ icon: Icon, title, subInformation }: BagdeItemProps): JSX.Element {

  return (
    <div className={styles.bagdeContainer}>
      <Icon />
      <section className={styles.sectionContainer}>
        <label>{title}</label>
        <label>{subInformation}</label>
      </section>
    </div>
  )
}