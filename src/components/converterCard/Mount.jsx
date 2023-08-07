import React, { useState } from "react";
import { NumericFormat } from "react-number-format";

export default function Mount({ inputHandler, inputValue }) {
  return (
    <div className="Mount_mount">
      <div class="input-group mb-3 h-100">
        <span class="input-group-text text-white bg-transparent">$</span>
        <NumericFormat
          thousandSeparator={true}
          type="text"
          class="form-control text-white bg-transparent"
          aria-label="Dollar amount (with dot and two decimal places)"
          value={inputValue}
          onChange={inputHandler}
        />
      </div>
    </div>
  );
}
