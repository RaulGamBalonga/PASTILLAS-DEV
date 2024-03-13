import axios from 'axios'; 

const { useEffect } = require("react");

function App() {
    useEffect(() => {
        axios.get('https://api.github.com/users')
        .then(response => console.log(response.data))
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
