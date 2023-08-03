import React from "react";

export default function FromCurrency() {
  return (
    <div className="FromCurrency_from-currency">
      <select className="form-select bg-transparent text-white" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option className="bg-black" value="1">One</option>
        <option className="bg-black" value="2">Two</option>
        <option className="bg-black" value="3">Three</option>
      </select>
    </div>
  );
}
