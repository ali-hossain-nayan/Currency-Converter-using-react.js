import React, { useId } from "react";

export const InputBox = ({
  label,
  amount,
  amountChange,
  currencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();

  const handleAmountChange = (e) => {
    amountChange && amountChange(Number(e.target.value));
  };
  const handleCurrencyChange = (e) => {
    currencyChange && currencyChange(e.target.value);
  };

  return (
    <>
    <div className={`bg-blue-200 p-6 rounded-lg text-sm flex ${className} max-w-3xl mx-auto`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-blue-600 mb-2 inline-block font-semibold"
        >
          {label}
        </label>
  
        <input
          type="number"
          className="outline-none w-full bg-blue-100 py-2 px-3 rounded-md"
          id={amountInputId}
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
  
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-blue-600 mb-2 w-full font-semibold">Currency Type</p>
        <select
          className="rounded-md px-3 py-2 bg-blue-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={handleCurrencyChange}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  </>
  
  

  );
};
