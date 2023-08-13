/* eslint-disable react/prop-types */
import styles from "./EventItem.module.css";
const EventItem = ({ info, name, image, onEventClick, id }) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div className={styles.eventItemContainer}>
      <img src={image} alt={name} width="200px" height="200px" />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          Ver más
        </button>
      </div>
    </div>
  );
};
export default EventItem;
