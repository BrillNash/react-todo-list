import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC } from 'react'
import type { TodoTask } from '../types/types'

interface TodoProps {
  task: TodoTask
  toggleComplete: any
  deleteTodo: any
  editTodo: any
}

export const Todo: FC<TodoProps> = ({ task, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className='bg-violet-400 shadow-md rounded-sm flex items-center justify-between py-2 px-4 overflow-hidden'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'line-through': ''} text-left whitespace-normal break-words overflow-hidden pr-4 hover:cursor-pointer`}>{task.task}</p>
      <div className='space-x-4 min-w-12'>
        <FontAwesomeIcon className="cursor-pointer" icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon className="cursor-pointer" icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
