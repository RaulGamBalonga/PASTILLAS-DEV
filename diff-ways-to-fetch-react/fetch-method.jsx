const { useEffect } = require("react")

function App() {
    useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    }, []);
    
    return <div>
        {Data.map((data, index) => {
            return <div key={index}>
                <h1>{data.login}</h1>
                <p>{data.id}</p>
            </div>
        })}
    </div>
}