import React from "react";
import Select from "react-select";
import CurrencyFlag from 'react-currency-flags';

export default function FromCurrency({ currencyFrom }) {
  if (!currencyFrom || !currencyFrom.currencies) {
    return null;
  }

  const currencyArray = Object.keys(currencyFrom.currencies);

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

  return (
    <div className="FromCurrency_from-currency">
      <Select options={options} className="text-white FromCurrency_Select" styles={customStyles} />
    </div>
  );
}
