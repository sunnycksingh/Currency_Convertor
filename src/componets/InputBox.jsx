import React from 'react'
import { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChnage,
    onCurrencyChnage,
    currencyOptions = [],
    amountDisable = false,
    selectedCurrency = "usd",
    currecnyDisable = false,
    className = ""

   

})


{
  const AmountInputId = useId();

  return (
   <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>   {/* `` that we are using to get change the css for whole div*/}
   <div className="w-1/2">
   <label htmlFor={AmountInputId} className='text-black/40 mb-2 inline-block'>
   {label}
   </label>
   <input id={AmountInputId}
   className='outline-none w-full bg-transparent py-1.5'
   type='number'
   placeholder='Amount'
   disabled = {amountDisable}
   value={amount}
   onChange={(e) => onAmountChnage && onAmountChnage(Number(e.target.value))}  // 

   />
   </div>
   <div className='w-1/2 flex flex-wrap justify-end text-right'>
   <p className='text-black/40 mb-2 w-full'>Currency Type</p>
   <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
   value={selectedCurrency}
   onChange={(e) => onCurrencyChnage && onCurrencyChnage(e.target.value) }
   disabled = {currecnyDisable}
   >
   {currencyOptions.map((currency)=>(
    <option key={currency} value={currency}>
    {currency}
    </option>
  ))};
   </select>

   </div>

   </div>
  )
}

export default InputBox