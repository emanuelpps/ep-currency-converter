import React from "react";
import CurrencyFlag from 'react-currency-flags';
import Select from "react-select";

export default function ToCurrency({ currencyTo, setCurrentCurrencyTo }) {
  if (! currencyTo || ! currencyTo.currencies) {
    return null;
  }

  const currencyArray = Object.keys( currencyTo.currencies);

  const options = currencyArray.map((currency) => {


    return {
      value: currency,
      label: (
        <span className="FromCurrency_SpanSelect">
          {<CurrencyFlag currency={currency} size="sm" className="mx-3" />}{currency}
          </span>
      ),
    };
  });

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff;" : "#fff",
      backgroundColor: state.isSelected ? "#13005a" : "#0b0032;",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#0b0032;",
      padding: "10px",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  const OnChangeHandler = (e) => {
    setCurrentCurrencyTo(e.value);
    console.log(e.value);
  }

  return (
    <div className="ToCurrency_to-currency">
      <Select options={options} className="text-white ToCurrency_Select" styles={customStyles} onChange={(e) => OnChangeHandler(e)}/>
    </div>
  );
}
