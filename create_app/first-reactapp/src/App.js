import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selected, setSelect] = useState(1);
  const initobj = {
    name: "plz select",
    symbol: "",
    quotes: {
      USD: {
        price: 0.1
      }
    }
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((reponse) => reponse.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
      setCoins(current => [initobj, ...current]);
    });
  }, [])
  const onChange = (event) => {
    setMoney(event.target.value);
  }
  const sChange = (event) => {
    setSelect(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? 
        <strong>Loading...</strong> : 
        (
        <select onChange={sChange}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br>
      </br>
      {loading ?
        "" :
        (
        <input
          onChange={onChange}
          type = "number"
          placeholder = "your dollar($)"
        >
        </input>
      )}
      {loading ?
        "" :
        (
          <input
          value={money === 0 ? "" : money/selected}
          >
          </input>
        )
      }
    </div>
  );
}

export default App;
