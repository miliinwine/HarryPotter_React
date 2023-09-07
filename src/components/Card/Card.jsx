import styles from "./Card.module.css";
import { Button } from "../../ui/Button/Button";
export const Card = ({image, name, actor, gender, house, core, alive, handlerBtn, isLiked}) => {
  return (
    <div className={styles.card}>
      <Button handlerBtn={ handlerBtn} isLiked={isLiked} />
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.description}>
        <h2>{name}</h2>
        <li>Actor: {actor}</li>
        <li>Gender: {gender}</li>
        <li>House: {house}</li>
        <li>Wand core: {core}</li>
        <li>Alive: {alive}</li>
      </div>
    </div>
  );
};
