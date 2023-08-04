import React from "react";
import Select from "react-select";
import { iso31661 } from "iso-3166";
import Flag from "react-world-flags";

export default function FromCurrency({ currencyFrom }) {
  if (!currencyFrom || !currencyFrom.currencies) {
    return null;
  }

  const currencyArray = Object.keys(currencyFrom.currencies);

  const options = currencyArray.map((currency) => ({
    value: currency,
    label: (
      <span>
        <Flag code={iso31661[currency]?.alpha2} height="16" />
        {currency}
      </span>
    ),
  }));

  return (
    <div className="FromCurrency_from-currency">
      <Select options={options} className="bg-transparent"/>
    </div>
  );
}
