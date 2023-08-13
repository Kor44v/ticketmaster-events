import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import styles from "./detail.module.css";

const Detail = () => {
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { eventId } = useParams();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
          import.meta.env.VITE_TICKETMASTER_API_KEY
        }`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setEventData(result);
          setIsLoading(false);
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }, []);

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Cargando evento...</div>;
  }

  if (Object.keys(error) === 0) {
    return <div>Ha ocurrido un error...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img
          src={eventData.images?.[0].url}
          alt=""
          className={styles.eventImage}
        />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        {eventData.dates?.start.dateTime ? (
          <p className={styles.eventDate}>
            {format(new Date(eventData.dates.start.localDate), "d LLLL yyyy")}
          </p>
        ) : null}
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
        <img src={eventData.seatmap?.staticUrl} alt="SeatMap event" />
        <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
        <p className={styles.priceRangeLegend}>
          Rango de precios
          {eventData.priceRanges?.[0].min}-{eventData.priceRanges?.[0].max}{" "}
          {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url}>Ir por tus boletos</a>
    </div>
  );
};

export default Detail;
