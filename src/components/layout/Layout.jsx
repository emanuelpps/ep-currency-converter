import React, { useState } from "react";
import ConverterCard from "../converterCard/ConverterCard";
import ConverterResults from "../converterResult/ConverterResults";

export default function Layout() {
  const [currencyResult, setCurrencyResult] = useState();
  const [loadingResults, setLoadingResults] = useState(false);
  const [currencyState, setCurrencyState] = useState();

  return (
    <div className="Layout_layout">
      <ConverterCard
        currencyResult={currencyResult}
        setCurrencyResult={setCurrencyResult}
        setLoadingResults={setLoadingResults}
        loadingResults={loadingResults}
        setCurrencyState={setCurrencyState}
      />
      <ConverterResults
        currencyResult={currencyResult}
        loadingResults={loadingResults}
        currencyState={currencyState}
      />
    </div>
  );
}
