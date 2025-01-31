import React from "react";
import {useId,useEffect,useRef }from "react"
function InputBox({
  label,
  amount = "", // Ensure default value
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputId = useId();
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
      return (
    
    
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

      {/* Input Section */}

      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
        ref={inputRef}
          id={inputId}
          name="amount"
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          min="0"
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Currency Selection */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((c) => (
            <option key={c} value={c}>
              {c.toUpperCase()} {/* Makes currency codes uppercase */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
