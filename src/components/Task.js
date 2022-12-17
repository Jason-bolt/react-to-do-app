import { IoMdCloseCircle } from "react-icons/io";

const Task = ({ tasks }) => {
  return (
    <>
    {
        tasks.map((task) => (
        <div className="border p-4 my-2 bg-green-50 relative w-full md:w-1/2 lg:w-1/3">
            <div className="absolute top-3 right-3">
                <IoMdCloseCircle className="text-red-500 text-xl hover:text-2xl" />
            </div>
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