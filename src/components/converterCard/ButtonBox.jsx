import React from "react";
import SwapButton from "../Buttons/SwapButtonCurrency/SwapButton";

export default function ButtonBox({swapCurrency}) {
  return (
    <div className="ButtonBox_swap-button-box">
      <SwapButton swapCurrency={swapCurrency}/>
    </div>
  );
}
