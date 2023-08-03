import React, { useState } from "react";
import Mount from "./Mount";
import FromCurrency from "./FromCurrency";
import ButtonBox from "./ButtonBox";
import ToCurrency from "./ToCurrency";
import ConverterBox from "./ConverterBox";
import { requestOptions } from "../../api/CurrencyDataApi";

export default function ConverterCard() {
  const [inputValue, setInputValue] = useState();
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [currencyResult, setCurrencyResult] = useState();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const ConversionCurrency = () => {
    fetch(
      `https://api.apilayer.com/currency_data/convert?to=[to]&from=[from]&amount=${inputValue}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const CurrencyCountry = () => {
    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="ConverterCard_converter">
      <Mount inputHandler={inputHandler} inputValue={inputValue} />
      <FromCurrency currencyFrom={currencyFrom} />
      <ButtonBox />
      <ToCurrency currencyTo={currencyTo} />
      <ConverterBox />
    </div>
  );
}
