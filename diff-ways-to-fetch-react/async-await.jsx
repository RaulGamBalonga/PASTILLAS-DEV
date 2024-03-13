const { useEffect } = require("react");

function App() {
  useEffect(() => {
    async () => {
      try {
        const result = await axios.get("https://api.github.com/users");
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  return (
    <div>
      {Data.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.login}</h1>
            <p>{data.id}</p>
          </div>
        );
      })}
    </div>
  );
}
