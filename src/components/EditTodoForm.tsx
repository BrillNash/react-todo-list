import { useState, type FC } from "react"
import type { TodoTask } from "../types/types"

interface EditTodoFormProps {
  editTodo: any
  task: TodoTask
}

export const EditTodoForm: FC<EditTodoFormProps> = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)
  
  const handleSubmit = (e: Event) => {
    e.preventDefault()
    
    editTodo(value, task.id)

    setValue('')
  }
  return (
    <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
      <input 
        className="border border-violet-600 py-0 px-4 flex-1" 
        type="text" 
        placeholder="Update Task"
        value={value} 
        onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Update Task</button>

    </form>
  )
}
