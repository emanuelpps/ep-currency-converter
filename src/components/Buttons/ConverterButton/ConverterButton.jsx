import React from "react";

export default function ConverterButton({
  ConversionCurrency,
  setLoadingResults,
  loadingResults
}) {
  return (
    <>
      <button
        className="ConverterButtonBox_button"
        onClick={() => {
          ConversionCurrency();
          setLoadingResults(!loadingResults);
        }}
      >
        Convert
      </button>
    </>
  );
}
