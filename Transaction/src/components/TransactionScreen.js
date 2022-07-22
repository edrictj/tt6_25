const screen =  [{
    "id": 3,
    "wallet_id": 2,
    "debit_id": 20,
    "debit_currency": "NOK",
    "debit_amount": 250.00,
    "credit_id": 15,
    "credit_currency": "CNH",
    "credit_amount": 164.13,
    "description": "trip to china",
    "created_at": "2021-11-05 16:00:00",
    "created_by": "Jane",
    "updated_at": "2021-11-06 16:00:00",
    "updated_by": "Jane"
  }
]
// data is extracted from above
// API would need to replace the data extraction

const TransactionScreen = () => {
  return (
    <header className = "Body">
    {screen.map((screen)=> (
        <h1>{screen.debit_currency}  to  {screen.credit_currency}</h1>
        ))}
    {screen.map((screen)=> (
        <h2>{screen.debit_amount}  converted to  {screen.credit_amount}</h2>
        ))}
      {screen.map((screen)=> (
        <h3>{screen.description}</h3>
        ))}
    </header>
  )
}

export default TransactionScreen
