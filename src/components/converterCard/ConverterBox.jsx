import React, { useState } from "react";
import ConverterButton from "../Buttons/ConverterButton/ConverterButton";

export default function ConverterBox({
  ConversionCurrency,
  setLoadingResults,
  loadingResults
}) {
  return (
    <div className="ConverterButtonBox_converter-button-box">
      <ConverterButton
        ConversionCurrency={ConversionCurrency}
        setLoadingResults={setLoadingResults}
        loadingResults={loadingResults}
      />
    </div>
  );
}
