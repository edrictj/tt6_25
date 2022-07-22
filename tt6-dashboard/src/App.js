import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'
import ERTable from './components/ERTable'

const App=() => {
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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
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
     <AddTasks />
     {tasks.length > 0 ?
     <Tasks tasks={tasks}  
     onDelete={deleteTask} onToggle={toggleReminder}/> :
      ('Empty Wallet')}
      <ERTable/>
    </div>
  );
}

export default App;
