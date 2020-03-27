import { useEffect, useState } from "react";
import covid from "novelcovid";

export function useFetch(country = "iran") {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      setError(false);
      try {
        let all = await covid.getAll();
        let specificCountry = await covid.getCountry({ country });
        setData({
          all,
          specificCountry
        });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    callApi();
  }, [country]);
  return [loading, data, error];
}
