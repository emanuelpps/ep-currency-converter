import React from 'react';
import Mount from './Mount';
import FromCurrency from './FromCurrency';
import ButtonBox from './ButtonBox';
import ToCurrency from './ToCurrency';
import ConverterBox from './ConverterBox';

export default function ConverterCard() {
  return (
    <div className='ConverterCard_converter'>
        <Mount/>
        <FromCurrency/>
        <ButtonBox/>
        <ToCurrency/>
        <ConverterBox/>
    </div>
  )
}
