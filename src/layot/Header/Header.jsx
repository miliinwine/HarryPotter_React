import styles from "./Header.module.css";
export const Header = () => {
  return (
    <div>
      <h1>Harry Potter</h1>
      <p className={styles.text}>View all characters from the Harry Potter universe.</p>
    </div>
    
  );
};
