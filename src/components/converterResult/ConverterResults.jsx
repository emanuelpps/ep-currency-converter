import React from "react";
import { NumericFormat } from 'react-number-format';

export default function ConverterResults({currencyResult}) {
  console.log(currencyResult);
  return (
    <div className="ConverterResults_converter-result">
      <NumericFormat className="ConverterResults_result text-center" value={`${Math.round(currencyResult)}`} type="$"  thousandSeparator="," decimalScale={2}/>;
    </div>
  );
}
