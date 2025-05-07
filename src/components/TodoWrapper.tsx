import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { v4 as uuidv4 } from 'uuid' 
import type { TodoTask } from "../types/types"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<TodoTask[]>([])

  const addTodo = (todo: string) => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    }])
  }

  const toggleComplete = (id: string) => {
    setTodos(todos.map((todo: TodoTask) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map((todo: TodoTask) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: TodoTask) => todo.id !== id))
  }

  const editTask = (task: string, id: string) => {
    setTodos(todos.map((todo: TodoTask) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo ))
  }

  return (
    <div className="bg-violet-950 w-full max-w-120 min-h-28 p-8 flex flex-col gap-4 rounded-sm">
      <h1 className="font-bold !text-[2.5rem] p-4">Organize Your Tasks</h1>
      <TodoForm addTodo={addTodo}/>
      { todos.map((todo, index) => (
        todo.isEditing ? 
        (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo}/>
        )
      ))}
    </div>
  )
}