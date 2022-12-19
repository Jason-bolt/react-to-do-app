import { useState } from 'react';
import CreateButton from './components/CreateButton';
import Footer from './components/Footer';
import Header from './components/Header'
import ShowTasks from './components/ShowTasks';
import TaskForm from './components/TaskForm';


function App() {

  const [text, setText] = useState("Create Task")
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        task: "My first task",
        date: "Today at 5pm"
      },
      {
        id: 2,
        task: "My second task",
        date: "Today at 6pm"
      },
      {
        id: 3,
        task: "My third task",
        date: "Today at 7pm"
      },
      {
        id: 4,
        task: "My forth task",
        date: "Today at 8pm"
      },
      {
        id:5,
        task: "My fifth task",
        date: "Today at 9pm"
      },
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }


  return (
    <>
      <Header />
      <CreateButton text={text} toggleForm={toggleForm} showForm={showForm} />
      {showForm && <TaskForm onAdd={addTask} />}
      <ShowTasks tasks={tasks} onDelete={deleteTask} />
      <Footer />
    </>
  );
}

export default App;
