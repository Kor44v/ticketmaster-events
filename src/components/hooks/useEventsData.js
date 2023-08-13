import { useEffect, useState } from "react";
import eventsJSON from "../../data/event.json";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(eventsJSON);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 4000);

    //Load API call
  }, []);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};
export default useEventsData;
