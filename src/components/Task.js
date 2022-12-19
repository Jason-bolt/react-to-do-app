import { IoMdCloseCircle } from "react-icons/io";

const Task = ({ tasks, onDelete }) => {
  return (
    <>
    {
        tasks.map((task) => (
        <div className="border p-4 my-2 bg-green-50 relative w-full md:w-1/2 lg:w-1/3">
            <button className="absolute top-3 right-3" onClick={() => onDelete(task.id)}>
                <IoMdCloseCircle className="text-red-500 text-xl" />
            </button>
            <h1 className="text-lg text-green-900">
                {task.task}
            </h1>
            <p className="text-gray-500 text-sm">
                {task.date}
            </p>
        </div>
        ))
    }
    </>
  )
}

export default Task