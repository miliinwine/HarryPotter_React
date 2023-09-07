import styles from "./Input.module.css";
export const Input = ({ type, placeholder, handler }) => {
  return (
    <div className={styles.input}>
          <label className={styles.label}>Name</label>
          <input
            onChange={handler}
            type={type}
            placeholder={placeholder}
          ></input>
    </div>
  );
};
