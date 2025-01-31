import React, { useState, useEffect ,useRef} from "react";
import InputBox from "./components/InputBox";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
const App = () => {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currencyinfo = useCurrencyinfo(from);

  const options = Object.keys(currencyinfo);
  

  const swap = () => {
    setTo(to);
    setFrom(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyinfo[to]);
  };
  return (
    

    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount || 0}
                currencyOptions={options}
                onCurrencyChange={(amount) => setFrom(amount)}
                selectCurrency={from}
                onAmountChange={(c) => setAmount(c)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute cursor-pointer left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount || 0}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(c) => setTo(c)}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
