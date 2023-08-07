import React from "react";
import { NumericFormat } from 'react-number-format';

export default function ConverterResults({currencyResult}) {
  console.log(currencyResult);
  return (
    <div className="ConverterResults_converter-result">
      <NumericFormat className="result" value={`$${Math.round(currencyResult)}`}  thousandSeparator="," />;
      {/*<h2 ></h2>*/}
    </div>
  );
}
