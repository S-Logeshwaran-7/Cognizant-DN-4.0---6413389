import {useState} from 'react'

export const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('');   
    const [convertedAmount, setConvertedAmount] = useState(0);
    const conversion= (c) =>{
        c.preventDefault();
        let result=0;
        if (currency === 'usd') {
           result= amount *87.17; 
        } else if (currency === 'euro') {
            result=amount * 101.06; 
        } else {
            alert('Unsupported currency');
        }
        setConvertedAmount(result);
        alert(`Converted Amount: ₹ ${convertedAmount} Rupees`);
    }
    return (
        <div>
            <h1 style={{color : 'green'}}>Currency Converter!!!</h1>
            <form onSubmit={conversion}>
                <label>Amount: </label>
                <input type="number" name="amount" min="0" value={amount} onChange={(c)=>{setAmount(c.target.value)}}></input><br/>
                <label>Currency: </label>
                <input type='text' name ="currency" value={currency} onChange={(c)=>{setCurrency(c.target.value)}}></input><br/>
                <input type='submit'></input>
            </form>
        </div>
    )
}
