const Task = ({ tasks }) => {
  return (
    <>
    {
        tasks.map((task) => (
        <div className="border p-4 my-2 bg-green-50 w-full md:w-1/2 lg:w-1/3">
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