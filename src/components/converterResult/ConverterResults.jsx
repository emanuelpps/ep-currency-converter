import React from "react";
import { NumericFormat } from "react-number-format";

export default function ConverterResults({ currencyResult, loadingResults }) {
  console.log(currencyResult);
  return (
    <div className="ConverterResults_converter-result">
      {currencyResult ? (
        <NumericFormat
          className="ConverterResults_result text-center"
          value={`${Math.round(currencyResult)}`}
          type="$"
          thousandSeparator=","
          decimalScale={2}
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
