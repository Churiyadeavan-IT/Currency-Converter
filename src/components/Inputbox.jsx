import React from 'react'

const Inputbox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'aud',
    amountDisabled = false
}) => {
    return (
        <div className='w-6/7 h-3/9 rounded-2xl flex bg-gradient-to-tr from-[#002f39] via-[#00202b] to-[#001824]'>
            <div className='w-1/2 h-full flex flex-col justify-between py-5 pl-5'>
                <label className='text-lg text-left pl-2 text-[#00b4cf]' htmlFor="amount-field">{label}</label>
                <input
                    className='custom-input h-3/6 text-left border-2 text-[#00b4cf] border-[#008fba] rounded-xl rounded-r-none p-1 focus:outline-none'
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    disabled={amountDisabled}
                    placeholder='0'
                    id='amount-field'
                />
            </div>
            <div className='relative w-1/2 h-full flex flex-col justify-between py-5 pr-5'>
                <label className='text-lg text-right pr-3 text-[#00b4cf]' htmlFor="currency-list">Currency Type</label>
                <select
                    className='appearance-none h-3/6 text-right text-[#00b4cf] border-2 border-[#008fba] rounded-xl rounded-l-none border-l-0 p-1 pr-9 focus:outline-none'
                    id="currency-list"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>{currency}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-6 top-11 flex items-center pointer-events-none">
                    <svg className="w-6 h-6 text-[#008fba]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 7l3 3 3-3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Inputbox