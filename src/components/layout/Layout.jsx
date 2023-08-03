import React from "react";
import ConverterCard from "../converterCard/ConverterCard";
import ConverterResults from "../converterResult/ConverterResults";

export default function Layout() {
  return (
    <div className="Layout_layout">
      <ConverterCard />
      <ConverterResults/>
    </div>
  );
}
