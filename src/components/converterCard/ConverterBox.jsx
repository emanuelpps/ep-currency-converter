import React from "react";
import ConverterButton from "../Buttons/ConverterButton/ConverterButton";

export default function ConverterBox({ConversionCurrency}) {
  return (
    <div className="ConverterButtonBox_converter-button-box">
      <ConverterButton ConversionCurrency={ConversionCurrency}/>
    </div>
  );
}
