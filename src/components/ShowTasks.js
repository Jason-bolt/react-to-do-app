import Task from "./Task"

const ShowTasks = ({ tasks, onDelete }) => {
  return (
    <section className="my-20 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-7">
            My tasks
        </h1>
        <Task tasks={tasks} onDelete={onDelete} />
    </section>
  )
}

export default ShowTasks