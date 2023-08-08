import React, { useState, useEffect } from "react";
import Mount from "./Mount";
import FromCurrency from "./FromCurrency";
import ButtonBox from "./ButtonBox";
import ToCurrency from "./ToCurrency";
import ConverterBox from "./ConverterBox";
import { requestOptions } from "../../api/CurrencyDataApi";

export default function ConverterCard({ setCurrencyResult }) {
  const [inputValue, setInputValue] = useState();
  const [currencyFrom, setCurrencyFrom] = useState({});
  const [currencyTo, setCurrencyTo] = useState({});
  const [currentCurrencyFrom, setCurrentCurrencyFrom] = useState("");
  const [currentCurrencyTo, setCurrentCurrencyTo] = useState("");
  const [swapButton, setSwapButton] = useState(false);

  useEffect(() => {
    const fetchCountryCurrency = async () => {
      try {
        const response = await fetch(
          "https://api.apilayer.com/currency_data/list",
          requestOptions
        );
        const data = await response.json();
        setCurrencyFrom(data);
        setCurrencyTo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryCurrency();
  }, []);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const swapCurrency = () => {
    setSwapButton(!swapButton);
    setCurrentCurrencyFrom(
      swapButton ? currentCurrencyTo : currentCurrencyFrom
    );
    setCurrentCurrencyTo(swapButton ? currentCurrencyFrom : currentCurrencyTo);
  };

  const ConversionCurrency = () => {
    if (inputValue !== undefined) {
      const NewInput = inputValue.replace(/,/g, "");
      fetch(
        `https://api.apilayer.com/currency_data/convert?to=${currentCurrencyTo}&from=${currentCurrencyFrom}&amount=${NewInput}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            setCurrencyResult(data.result);
          } else {
            console.log("Error en la conversión:", data.error);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("valor vacio");
    }
  };

  return (
    <div className="ConverterCard_converter">
      {currencyFrom && currencyTo ? (
        <>
          <Mount inputHandler={inputHandler} inputValue={inputValue} />
          <FromCurrency
            currencyFrom={currencyFrom}
            setCurrentCurrencyFrom={setCurrentCurrencyFrom}
            currentCurrencyTo={currentCurrencyTo}
            setSwapButton={setSwapButton}
            swapButton={swapButton}
          />
          <ButtonBox swapCurrency={swapCurrency} />
          <ToCurrency
            currencyTo={currencyTo}
            setCurrentCurrencyTo={setCurrentCurrencyTo}
            currentCurrencyFrom={currentCurrencyFrom}
            setSwapButton={setSwapButton}
            swapButton={swapButton}
          />
          <ConverterBox ConversionCurrency={ConversionCurrency} />
        </>
      ) : (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
