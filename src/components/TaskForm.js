import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  const updateText = (event) => {
    setText(event.target.value)
  }
  
  const updateDate = (event) => {
    setDate(event.target.value)
  }

  const submit = (event) => {
    event.preventDefault()

    if (!text) {
      alert("Task name is required!")
      return
    }

    const task = text
    onAdd({task, date})

    setText('')
    setDate('')
  }


  return (
    <div className="my-3 flex items-center justify-center px-5">
      <div className="border shadow-md rounded p-5 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold text-center">Task Form</h1>

        <form onSubmit={submit}>
          {/* Task name */}
          <div className="flex flex-col my-4">
            <label className="text-gray-700">
              Task name
            </label>
            <input
              type="text"
              placeholder="Add a task..."
              className="border border-gray-400 rounded-lg"
              value={text}
              onChange={updateText}
            />
          </div>

          {/* Date or time */}
          <div className="flex flex-col my-4">
            <label className="text-gray-700">
              Date or time
            </label>
            <input
              type="text"
              placeholder="Add a date or time..."
              className="border border-gray-400 rounded-lg"
              value={date}
              onChange={updateDate}
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-gradient-to-r from-green-700 to-green-500 text-white rounded flex w-full items-center justify-center"
          >
            <span className="mr-1">Create</span>
            <BsCheck2Circle className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
