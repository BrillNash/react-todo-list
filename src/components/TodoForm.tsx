import { useState, type FC } from "react"

interface TodoFormProps {
  addTodo: any
}

export const TodoForm: FC<TodoFormProps> = ({addTodo}) => {
  const [value, setValue] = useState('')
  
  const handleSubmit = (e: Event) => {
    e.preventDefault()
    
    addTodo(value)
    setValue('')
  }
  return (
    <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
      <input 
        className="border border-violet-600 py-0 px-4 flex-1" 
        type="text" 
        placeholder="What is the task today?"
        value={value} 
        onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add Task</button>

    </form>
  )
}
