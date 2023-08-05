import React from "react";

export default function ConverterButton({ConversionCurrency}) {
  return (
    <>
      <button className="ConverterButtonBox_button" onClick={() => ConversionCurrency()} >Convert</button>
    </>
  );
}
