import React, { useState } from 'react'
import {  CurrencyInfo } from './hooks/CurrencyInfo'
import { InputBox } from './components/InputBox'

export const App = () => {
    const [amount,setAmount]=useState(0)
    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("bdt")
    const [convertedAmount,setConvertedAmount]=useState(0)

    const moneyInfo = CurrencyInfo(from)
    const options=Object.keys(moneyInfo)

    const Swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const Convert=()=>{
         setConvertedAmount(amount*moneyInfo[to]);
    };
  return (
    <>
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/15030871/pexels-photo-15030871/free-photo-of-monochrome-photo-of-man-wearing-black-sweater.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white bg-opacity-30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Convert();
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                currencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                amountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-800 text-white px-3 py-1"
                onClick={Swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-4 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  
  )
}

export  default App;