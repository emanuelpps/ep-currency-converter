import React from "react";
import { LuArrowDownUp } from "react-icons/lu";

export default function SwapButton({swapCurrency}) {
  const customStyle = {
    "background-color": "#0b0032",
    "border-color": "#13005a",
    "color": "#03C988"
  }
  return (
    <div className="SwapButton_swap-button">
      <button type="button" class="btn btn-outline-primary" style={customStyle} onClick={() => swapCurrency()}>
        <LuArrowDownUp />
      </button>
    </div>
  );
}
