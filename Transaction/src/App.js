import logo from './logo.svg';
import './App.css';
import TransactionHeader from './components/TransactionHeader';
import TransactionScreen from './components/TransactionScreen';

function App() {
  return (
    <div className="App">
       <TransactionHeader/>
       <TransactionScreen/>
    </div>
  );
}

export default App;
