import styles from "./FriendListItem.module.css"; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendListItem}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
