import React from "react";

export default function ToCurrency({currencyTo}) {
  
  if (!currencyTo || !currencyTo.currencies){
    return null
  }
  
  const currencyArray = Object.keys(currencyTo.currencies);
  return (
    <div className="ToCurrency_to-currency ">
      <select
        className="form-select bg-transparent text-white"
        aria-label="Default select example"
      >
        {currencyArray?.map((currency, index) => (
          <option
            key={index}
            className="FromCurrency_options"
          >
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
