import { useState } from 'react';
import {InputBox} from './componets'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(50000);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // taking the currencyinfo using from to get the user select mutiple currency.
  const options = Object.keys(currencyInfo);  // Using objects key to get the key of all the object from api in the currencyInfo.

  const swap = () =>
  {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () =>
  {
    setConvertedAmount(amount * currencyInfo[to]);  // in this case the amount means the from country amount and currentInfo storing all coutnry data so in the to section any currency is selected than take that amount
  }

 
  return (
    
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/1114612/pexels-photo-1114612.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
    }}>
      <div className="w-full">
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 
        backdrop-blur-sm bg-white/30'>
         <form onSubmit={(e) =>
          {
            e.preventDefault();
            convert();
          }
         }>
          <div className="w-full mb-1">
            <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChnage={(currency) =>setFrom(currency) }
            selectedCurrency={from} 
            onAmountChnage= {(amount) => setAmount(amount)}  />
          </div>
          <div className='relative w-full h-0.5'>
            <button type='button'
            className='absolute left-1/2 
            -translate-x-1/2
            -translate-y-1/2 border-2
            border-white rounded-md
            bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}
            >
            Swap
            </button>
          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChnage={(currency) =>setTo(currency) }
            selectedCurrency={to}
            amountDisable   />
            
          </div>
          <button type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
            Convert  to 
          </button>
         </form>
        </div>
      </div>

    </div>

  )
}

export default App
