import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (apiUrl) => {
  const [state, setState] = useState('');

  const fetchData = () => {
    axios.get(apiUrl)
      .then(({ data }) => setState(data))
      .catch(error => setState(''));
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state;
};