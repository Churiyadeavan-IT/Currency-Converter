import { useState } from 'react'
import { Inputbox } from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState('0')
  const [from, setFrom] = useState('aud')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState('0')

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const Swap = () => {
    console.log("Before Swap - Amount:", amount, "Converted Amount:", convertedAmount)

    setFrom(to)
    setTo(from)
    setAmount('0')
    setConvertedAmount('0')

    console.log("After Swap - Amount:", amount, "Converted Amount:", convertedAmount)
  }

  const converter = () => {
    const result = parseFloat(amount) * currencyInfo[to];
    if (result === 0) {
      setConvertedAmount(result.toFixed(0))
    }
    else {
      setConvertedAmount(result.toFixed(2))
    }
  }

  return (
    <div className='bg-image-set'>
      <main className='w-4/7 h-screen center-items'>
        <form className='outer-container center-items flex-col gap-5'
          onSubmit={(e) => {
            e.preventDefault()
            converter()
          }}
        >
          <Inputbox
            label='From'
            amount={amount}
            onAmountChange={(amount) => {
              if (amount.length > 1 && amount[0] === '0') {
                amount = amount.slice(1);
              }
              setAmount(amount)
            }}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={currencyOptions}
            selectedCurrency={from}
          />
          <button className='swap-btn hover:shadow-[0px_0px_5px_#00b4cf]' onClick={Swap}>Swap</button>
          <Inputbox
            label='To'
            amount={convertedAmount}
            onAmountChange={(amount) => {
              if (amount.length > 1 && amount[0] === '0') {
                amount = amount.slice(1);
              }
              setAmount(amount)
            }}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={currencyOptions}
            selectedCurrency={to}
            amountDisabled
          />
          <button type='submit' className='convert-btn hover:shadow-[0px_0px_10px_#002f39]'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </main>
    </div>
  )
}

export default App
