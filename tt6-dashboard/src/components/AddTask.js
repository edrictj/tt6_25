import {useState} from 'react'

const AddTask = () => {
    const[WalletType, setWallet] = useState("")
    const[CardNumber, setNumber] = useState("")
    const[DoubleConfirm, setConfirm] = useState("false")

  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Wallet</label>
            <input type='text' placeholder='Add Wallet Type' 
            value={WalletType} 
            onChange={(e) => setWallet(e.target.value)} />
        </div>
       
        <div className='form-control'>
            <label>Card Number</label>
            <input type='text' placeholder='Add Card Number'
            value={CardNumber} 
            onChange={(e) => setNumber(e.target.value)} />
        </div>

        <div className='form-control form-control-check'>
            <label>Confirm?</label>
            <input type='checkbox' 
            value={DoubleConfirm} 
            onChange={(e) => setConfirm(e.currentTarget.checked)}
            />
        </div>

        <input type = 'submit'value='Save Task'
        className='btn btn-block'/>

    </form>
  )
}

export default AddTask