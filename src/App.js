import { useState } from 'react';
import CreateButton from './components/CreateButton';
import Header from './components/Header'


function App() {

  const [text, setText] = useState("Create Task")
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }


  return (
    <>
      <Header />
      <CreateButton text={text} toggleForm={toggleForm} showForm={showForm} />
    </>
  );
}

export default App;
