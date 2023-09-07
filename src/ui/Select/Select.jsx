import styles from "./Select.module.css"
export const Select = ({handler}) => {
  return (
    <div className={styles.select}>
      <label className={styles.label}>School</label>
      <select onChange={handler}>
        <option value="">Choose one</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
};

