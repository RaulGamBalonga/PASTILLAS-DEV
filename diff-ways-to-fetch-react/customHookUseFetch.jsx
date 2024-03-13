const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data();

        setData(data);
        setLoading(false);
      } catch (error) {
        setServerError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, serverError };
};

____________________________________________________________________________________________________________________;
import useFetch from "./customHookUseFetch";

const App = () => {
  const { data, loading, serverError } = useFetch(
    "https://api.github.com/users"
  );

  return (
    <div>
      <h2>API data</h2>
      {loading && <span>Loading...</span>}
      {loading && serverError ? (
        <span> Error in fetching data ...</span>
      ) : (
        <span>{JSON.stringify(data)}</span>
      )}
    </div>
  );
};
