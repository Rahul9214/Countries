import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.err("Error fetching data: ", err);
      }
    };
    fetchData();
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "200px",
    padding: "10px",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
