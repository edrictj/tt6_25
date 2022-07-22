import { useState } from 'react'
import Header from './db_components/Header'
import Tasks from './db_components/Tasks'
import AddTasks from './db_components/AddTask'
import ERTable from './db_components/ERTable'
import Button from '@mui/material/Button';

const Dashboard=() => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Wallet 1',
        reminder: true,
    
      },
    
      {
        id: 2,
        text: 'Wallet 2',
        reminder: true,
    
      }   

    ])

  //Add Task
  const addTask = (task) => {
    console.log(task);
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const logOut = async (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/';
  }

  const wallet = async (e) => {
    e.preventDefault();
    window.location.href = '/wallet';
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> 
    task.id === id ? {...task, reminder: !task.reminder
    }: task))
  }

  return (
    <div className='container'>
     <Header />
     <Button
        type="logout"
        variant="contained"
        color="secondary"
        style={{minWidth: "85px", minHeight:"35px"}}
        onClick={logOut}>
        Log out
      </Button>
      <Button
        type="wallet"
        variant="contained"
        color="secondary"
        style={{minWidth: "254px", minHeight:"56px"}}
        onClick={wallet}>
        wallet
      </Button>
     <AddTasks onAdd={addTask} />
     {tasks.length > 0 ?
     <Tasks tasks={tasks}  
     onDelete={deleteTask} onToggle={toggleReminder}/> :
      ('Empty Wallet')}
      <ERTable/>

    </div>
  );
}

export default Dashboard;
