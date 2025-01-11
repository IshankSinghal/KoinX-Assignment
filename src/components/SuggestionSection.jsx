import { useState, useEffect } from "react";
import axios from "axios";

function SuggestionSection() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setCryptoData(response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function CryptoCard({ cryptoData }) {
    return (
      <div className="lg:w-[300px] rounded-2xl p-5 border-2 my-2 mr-2">
        <div className="flex items-center space-x-2">
          <img
            src={cryptoData.large}
            alt={cryptoData.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-[16px] font-normal">{cryptoData.name}</span>
          <span
            className={`text-${
              cryptoData.price_btc > 0 ? "green" : "red"
            }-500 text-xs font-normal`}
          >
            {cryptoData.price_btc.toFixed(6)} BTC
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="mt-4 flex justify-between overflow-x-scroll">
          {cryptoData.slice(0, 5).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="mt-4 flex justify-between overflow-x-auto">
          {cryptoData.slice(1, 6).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SuggestionSection;
