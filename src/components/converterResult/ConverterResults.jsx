import React from "react";
import { NumericFormat } from "react-number-format";

export default function ConverterResults({
  currencyResult,
  loadingResults,
  currencyState,
}) {
  console.log(currencyResult);
  console.log(currencyState);
  return (
    <div className="ConverterResults_converter-result">
      {currencyResult ? (
        <NumericFormat
          className="ConverterResults_result text-center"
          value={`${ currencyResult}`}
          thousandSeparator=","
          decimalScale={2}
          prefix={`${currencyState} `}
        />
      ) : loadingResults ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
