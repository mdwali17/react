import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'


function App() {
  
  const [amount,setAmount]=useState(0)
  const [from ,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)
  
  const currencyinfo = useCurrencyInfo(from)

  const options=Object.keys(currencyinfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{
    setConvertedAmount(amount*currencyinfo[to])
  }

  return (
    <>
     <div className='w-full h-screen flex flex-row justify-center items-center bg-cover bg-no-repeat'style={{backgroundImage:`url('https://tse4.mm.bing.net/th?id=OIP.8UVJHPPE6FGpj0PSnW837QHaEU&pid=Api&P=0&h=200')`,}}>
     <div className='w-2/6 mx-6 px-6 flex-col'>
     <div className='w-96 h-96  max-w-md mx-aut border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/50 bg-cover bg-no-repeat' style={{backgroundImage:`url('https://tse2.mm.bing.net/th?id=OIP.vqaEdxK-e4Q3tvcHlyZKCQHaH_&pid=Api&P=0&h=220')`}}></div>
     </div>
      <div className='w-2/4 px-8 mx-4'>
        <div className='w-96 h-96  max-w-md  mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form
        className=''
        onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>
          <div className='w-full h-fit py-2 mb-1'>
            <InputBox 
            label='From'
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency)=>
              setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount)=>setAmount(amount)}
            />
          </div>
          <div className='relative w-full py-5 h-10'>
            <button
            type='button'
            className='absolute left-1/2
            -translate-x-1/2
            -translate-y-1/2
            border-2
            border-white rounded-md
            bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}
            >
              swap
            </button>
          </div>
          <div className='w-full  h-fit mt-1 mb-4'>
            <InputBox
            label='To'
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={to}
            amountDisable
            />
          </div>
          <button
          type='sumbit'
          className='w-full bg-blue-600 text-white
          px-4 py-3 rounded-lg'
          >CONVERT {from.toUpperCase()} TO {to.toUpperCase()}</button>
        </form>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
