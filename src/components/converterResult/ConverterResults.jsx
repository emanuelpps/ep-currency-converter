import React from "react";

export default function ConverterResults({currencyResult}) {
  return (
    <div className="ConverterResults_converter-result">
      <h2 className="result">{currencyResult}</h2>
    </div>
  );
}
