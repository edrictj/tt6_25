import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const[WalletType, setWallet] = useState("")
    const[CardNumber, setNumber] = useState("")
    const[DoubleConfirm, setConfirm] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!WalletType){
            alert('New wallet not found')
            return
        }
        
        onAdd({WalletType, CardNumber, DoubleConfirm})
        setWallet ('')
        setNumber ('')
        setConfirm (false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
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
            checked = {DoubleConfirm}
            value={DoubleConfirm} 
            onChange={(e) => setConfirm(e.currentTarget.checked)}
            />
        </div>

        <input type = 'submit'value='Add Wallet'
        className='btn btn-block'/>

    </form>
  )
}

export default AddTask