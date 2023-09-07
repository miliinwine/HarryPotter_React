import styles from "./Button.module.css"
import { ReactComponent as Like } from './Like.svg';
import { ReactComponent as Dislike } from './Dislike.svg';
export const Button = ({handlerBtn, isLiked}) => {
  return (
    <div onClick={handlerBtn} className={styles.button}>
      {isLiked ? <Like/> : <Dislike/>}
    </div>
  )
}