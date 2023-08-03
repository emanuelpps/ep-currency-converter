import React from "react";

export default function Mount() {
  return (
    <div className="Mount_mount">
      <div class="input-group mb-3">
        <span class="input-group-text text-white bg-transparent">$</span>
        <input
          type="text"
          class="form-control text-white bg-transparent"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
    </div>
  );
}
