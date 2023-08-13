import { useState } from "react";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState();

  const fetchEvents = (params) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
        import.meta.env.VITE_TICKETMASTER_API_KEY
      }${params?.length ? params : ""}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return {
    events: data?._embedded?.events || [],
    isLoading,
    page: data?.page || {},
    error,
    fetchEvents,
  };
};
export default useEventsData;
