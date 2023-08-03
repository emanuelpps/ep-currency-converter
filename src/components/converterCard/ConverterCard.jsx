import React, { useState, useEffect } from "react";
import Mount from "./Mount";
import FromCurrency from "./FromCurrency";
import ButtonBox from "./ButtonBox";
import ToCurrency from "./ToCurrency";
import ConverterBox from "./ConverterBox";
import { requestOptions } from "../../api/CurrencyDataApi";


export default function ConverterCard() {
  
  const [inputValue, setInputValue] = useState();
  const [currencyFrom, setCurrencyFrom] = useState({});
  const [currencyTo, setCurrencyTo] = useState({});
  const [currencyResult, setCurrencyResult] = useState();

  useEffect(() => {
    const fetchCountryCurrency = async () => {
      try {
        const response = await fetch(
          "https://api.apilayer.com/currency_data/list",
          requestOptions
        );
        const data = await response.json();
        setCurrencyFrom(data);
        setCurrencyTo(data); // Guardar los datos en el estado
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryCurrency(); // Llamar a la función para obtener los datos
  }, []);

  console.log(currencyFrom);

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

  return (
    <div className="ConverterCard_converter">
      <Mount inputHandler={inputHandler} inputValue={inputValue} />
      <FromCurrency currencyFrom={currencyFrom} />
      <ButtonBox />
      <ToCurrency currencyTo={currencyTo} />
      <ConverterBox currencyResult={currencyResult} />
    </div>
  );
}
