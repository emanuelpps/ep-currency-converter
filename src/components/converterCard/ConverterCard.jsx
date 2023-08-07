import React, { useState, useEffect } from "react";
import Mount from "./Mount";
import FromCurrency from "./FromCurrency";
import ButtonBox from "./ButtonBox";
import ToCurrency from "./ToCurrency";
import ConverterBox from "./ConverterBox";
import { requestOptions } from "../../api/CurrencyDataApi";

export default function ConverterCard({ setCurrencyResult}) {
  const [inputValue, setInputValue] = useState();
  const [currencyFrom, setCurrencyFrom] = useState({});
  const [currencyTo, setCurrencyTo] = useState({});
  const [currentCurrencyFrom, setCurrentCurrencyFrom] = useState("");
  const [currentCurrencyTo, setCurrentCurrencyTo] = useState("");

  ///armar logica para que el input seleccionado y el valor seleccionado lleguen a la funcion para el resultado

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
      `https://api.apilayer.com/currency_data/convert?to=${currentCurrencyTo}&from=${currentCurrencyFrom}&amount=${inputValue}`,
      requestOptions
    )
    .then((response) => response.json())
    .then((data) => {
      // Verificar si el objeto de respuesta contiene las claves success y error
      if (data.success === true) {
        // Si success es true, entonces el resultado se encuentra en data.result
        setCurrencyResult(data.result);
      } else {
        // Si success es false, se produjo un error y puedes manejarlo como desees
        console.log("Error en la conversión:", data.error);
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

  return (
    <div className="ConverterCard_converter">
      <Mount inputHandler={inputHandler} inputValue={inputValue} />
      <FromCurrency
        currencyFrom={currencyFrom}
        setCurrentCurrencyFrom={setCurrentCurrencyFrom}
      />
      <ButtonBox />
      <ToCurrency
        currencyTo={currencyTo}
        setCurrentCurrencyTo={setCurrentCurrencyTo}
      />
      <ConverterBox ConversionCurrency={ConversionCurrency} />
    </div>
  );
}
