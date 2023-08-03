import React from "react";

export default function FromCurrency({ currencyFrom }) {

  if (!currencyFrom || !currencyFrom.currencies){
    return null
  }
  
  const currencyArray = Object.keys(currencyFrom.currencies);

  console.log(currencyFrom);
  console.log("array", currencyArray);
  return (
    <div className="FromCurrency_from-currency">
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
