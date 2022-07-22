import React from "react"
import CurrencyInput from "./Currency"

function Wallet() {
   const [amount1, setAmount1] = React.useState("0");
   const [amount2, setAmount2] = React.useState("0");
   const [currency1, setCurrency1] = React.useState("SGD");
   const [currency2, setCurrency2] = React.useState("USD");

   const [amount3, setAmount3] = React.useState("0");
   const [amount4, setAmount4] = React.useState("0");
   const [currency3, setCurrency3] = React.useState("SGD");
   const [currency4, setCurrency4] = React.useState("JPY");
   
   //usd to sgd
   function handleAmount1(amount1){
    setAmount1(amount1);
    setAmount2(amount1 * 1.4);
   }
   //sgd to usd
   function handleAmount2(amount2){
    setAmount1(amount2 / 1.4);
    setAmount2(amount2);
   }
   //sgd to jpy
   function handleAmount3(amount3){
    setAmount3(amount3);
    setAmount4(amount3 * 97.5303);
   }
   //jpy to sgd
   function handleAmount4(amount4){
    setAmount3(amount4 / 97.5303);
    setAmount4(amount4);
   } 
   
    return (
        <div className = "body">
            <p className="walletText">Wallet 1</p>
            <div className = "wallet">
                <CurrencyInput className ="currency1"
                    onAmountChange = {handleAmount1}
                    currencies = {['USD']} 
                    amount = {amount1} 
                    currency = {currency1}/>
                <label>USD</label>

                <label> = </label>

                <CurrencyInput className ="currency2"
                    onAmountChange = {handleAmount2}
                    currencies = {['SGD']} 
                    amount = {amount2} 
                    currency = {currency2} />
                <label>SGD</label>
            </div>

            <p className="walletText">Wallet 2</p>
            <div className = "wallet">
                <CurrencyInput className ="currency1"
                    onAmountChange = {handleAmount3}
                    currencies = {['SGD']} 
                    amount = {amount3} 
                    currency = {currency3}/>
                <label>SGD</label>
                <label> = </label>
                <CurrencyInput className ="currency2"
                    onAmountChange = {handleAmount4}
                    currencies = {['JPY']} 
                    amount = {amount4} 
                    currency = {currency4} />
                <label>JPY</label>
            </div>

        </div>
    )
}
export default Wallet;
  