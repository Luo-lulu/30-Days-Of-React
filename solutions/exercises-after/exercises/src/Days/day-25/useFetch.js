import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    await fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
