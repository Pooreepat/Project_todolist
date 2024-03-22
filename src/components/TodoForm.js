import React, {useState}from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value){

        addTodo(value);

        setValue('');
    }
};
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' onChange={(e) => setValue(e.target.value)} className='todo-input value = {value} {' placeholder='what is task to day?' />
    <button type='submit' className='todo-btn' >Add task</button>
    </form>
  )
}
