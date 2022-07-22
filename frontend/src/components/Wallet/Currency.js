function Currency(props){
    return (
        <div >
            <input 
                type = "text" 
                value = {props.amount} 
                onChange = {(event) => props.onAmountChange(event.target.value)}
            />
            {/* <select></select> */}
        </div>
    );
}

export default Currency