import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Slices/TodoSlice';

function AddTodo() {

  const [inputVal , setInputVal] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputVal));
    setInputVal("");
  }

  return (
    <div className='flex align-center justify-center mt-10'>
        <form onSubmit={handleAddTodo} className=''>
            <input type="text" placeholder='enter todo...' value={inputVal} className='border text-gray-800 text-lg border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-900' onChange={(e)=>{
                setInputVal(e.target.value);
            }} />
            <button type='submit' className='ml-5 border-none px-4 font-extrabold py-2 transition-all duration-200 rounded bg-red-700 hover:bg-red-900 text-white'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo