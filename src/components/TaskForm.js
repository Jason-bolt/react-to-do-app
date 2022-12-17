import { BsCheck2Circle } from "react-icons/bs";

const TaskForm = () => {
  return (
    <div className="my-3 flex items-center justify-center px-5">
      <div className="border shadow-md rounded p-5 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold text-center">Task Form</h1>

        <form>
          {/* Task name */}
          <div className="flex flex-col my-4">
            <label htmlFor="taskName" className="text-gray-700">
              Task name
            </label>
            <input
              type="text"
              placeholder="Add a task..."
              className="border border-gray-400 rounded-lg"
            />
          </div>

          {/* Date or time */}
          <div className="flex flex-col my-4">
            <label htmlFor="dateTime" className="text-gray-700">
              Date or time
            </label>
            <input
              type="text"
              placeholder="Add a date or time..."
              className="border border-gray-400 rounded-lg"
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
