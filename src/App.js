import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Go to store',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])
  return (
    <div className="container">
      <Header title="Welcome To Sky's app" >
      </Header>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
