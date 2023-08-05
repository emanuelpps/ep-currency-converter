import React, {useState} from "react";
import ConverterCard from "../converterCard/ConverterCard";
import ConverterResults from "../converterResult/ConverterResults";

export default function Layout() {
  const [currencyResult, setCurrencyResult] = useState();

  return (
    <div className="Layout_layout">
      <ConverterCard currencyResult={currencyResult} setCurrencyResult={setCurrencyResult}/>
      <ConverterResults currencyResult={currencyResult}/>
    </div>
  );
}
